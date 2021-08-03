import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Child01Container } from './child01';
import { Child02Container } from './child02';
import { MyEditorActions, MyEditorRootState } from './editor-redux';
import { QUERY, QUERY_ARR } from './test-data';
import './test.css';

interface StateProps {
    queryList: QUERY[],
    selectedQuery?: QUERY
}

interface DispatchProps {
    changeSelectedIndex: (index: number) => void
}

interface OwnProps {
}

type IProps = StateProps & DispatchProps & OwnProps;


export class EditorPage extends React.Component<IProps> {
    queryList: JSX.Element[] = [];

    constructor(props: IProps) {
        super(props);

        QUERY_ARR.forEach(element => {
            this.queryList.push(<li className="test-list" onClick={ev => this.listOnClick(ev)}>{element.id}</li>);
        });
    }

    listOnClick(ev: React.MouseEvent): void {
        const elm = ev.target as HTMLLIElement;;
        const clickId = elm.textContent;
        QUERY_ARR.forEach((elm, index) => {
            if (elm.id === clickId) {
                console.log("click index - " + index);
                this.props.changeSelectedIndex(index);
            }
        })
    }

    render(): React.ReactNode {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                Parent
                <div style={{ width: '300px', height: '610px', margin: '10px', marginRight: '40px' }}>
                    <ul>
                        {this.queryList}
                    </ul>
                    <div>
                        selectedQuery<br></br>
                        id: {(this.props.selectedQuery as QUERY).id} <br></br>
                        text: {(this.props.selectedQuery as QUERY).text} <br></br>
                    </div>
                </div>
                <div style={{ width: '500px', height: '610px', margin: '10px', border: '1px solid' }}>
                    <div style={{ width: '100%', height: '100%', border: '1px solid' }}>
                        Child
                        <Child01Container/>
                        <Child02Container/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store: MyEditorRootState): StateProps => ({
    queryList: store.editorState.queryList,
    selectedQuery: store.editorState.selectedQuery
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    changeSelectedIndex: (index) => dispatch(MyEditorActions.changeSelectedIndex(index))
});

export const EditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorPage);