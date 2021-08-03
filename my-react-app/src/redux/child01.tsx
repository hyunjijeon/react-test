import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MyEditorActions, MyEditorRootState } from './editor-redux';
import { QUERY } from './test-data';

interface StateProps {
    selectedQuery?: QUERY
}

interface DispatchProps {
    changeId: (id: string) => void
}

interface OwnProps {
}

type IProps = StateProps & DispatchProps & OwnProps;

export class Child01 extends React.Component<IProps> {

    onChangeId(ev: React.ChangeEvent): void {
        const elm = ev.target as HTMLInputElement;
        this.props.changeId(elm.value);
    }

    render(): React.ReactNode {
        console.log("render 1111111111111111");
        return (
            <div style={{ display: 'flex' }}>
                <p style={{ width: '200px' }}>id: </p>
                <input value={(this.props.selectedQuery as QUERY).id} onChange={(ev) => this.onChangeId(ev)}></input>
            </div>
        );
    }
}

const mapStateToProps = (store: MyEditorRootState): StateProps => ({
    selectedQuery: store.editorState.selectedQuery
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    changeId: (id) => dispatch(MyEditorActions.changeSelectedId(id))
});

export const Child01Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Child01);