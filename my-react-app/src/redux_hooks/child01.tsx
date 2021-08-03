import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyEditorActions, MyEditorRootState } from './editor-redux';
import { QUERY } from './test-data';

export const Child01 = () => {
    const dispatch = useDispatch();
    const editorId = useSelector((state: MyEditorRootState) => (state.editorState.selectedQuery as QUERY).id);

    const onChangeId = (ev: React.ChangeEvent) => {
        const elm = ev.target as HTMLInputElement;
        dispatch(MyEditorActions.changeSelectedId(elm.value));
    };

    console.log("11111111111111");

    return (
        <div style={{ display: 'flex' }}>
            <p style={{ width: '200px' }}>id: </p>
            <input value={editorId} onChange={(ev) => onChangeId(ev)}></input>
        </div>
    );
}
