import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MyEditorActions, MyEditorRootState } from './editor-redux';
import { QUERY } from './test-data';

interface StateProps {
    selectedQuery?: QUERY
}

interface DispatchProps {
    changeText: (text: string) => void
}

interface OwnProps {
}

type IProps = StateProps & DispatchProps & OwnProps;

export class Child02 extends React.Component<IProps> {

    onChangeText(ev: React.ChangeEvent): void {
        const elm = ev.target as HTMLInputElement;
        this.props.changeText(elm.value);
    }

    render(): React.ReactNode {
        console.log("render 22222222222222");
        return (
            <div style={{ display: 'flex' }}>
                <p style={{ width: '200px' }}>text: </p>
                <input value={(this.props.selectedQuery as QUERY).text} onChange={(ev) => this.onChangeText(ev)}></input>
            </div>
        );
    }
}

const mapStateToProps = (store: MyEditorRootState): StateProps => ({
    selectedQuery: store.editorState.selectedQuery
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    changeText: (text) => dispatch(MyEditorActions.changeSelectedText(text))
});

export const Child02Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Child02);