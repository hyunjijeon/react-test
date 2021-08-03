import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyEditorActions, MyEditorRootState } from './editor-redux';
import { QUERY } from './test-data';

export const Child02 = () => {
    const dispatch = useDispatch();
    const editorText = useSelector((state: MyEditorRootState) => (state.editorState.selectedQuery as QUERY).text);

    const onChangeText = (ev: React.ChangeEvent) => {
        const elm = ev.target as HTMLInputElement;
        dispatch(MyEditorActions.changeSelectedText(elm.value));
    };

    console.log("22222222222222");
    
    return (
        <div style={{ display: 'flex' }}>
            <p style={{ width: '200px' }}>text: </p>
            <input value={editorText} onChange={(ev) => onChangeText(ev)}></input>
        </div>
    );
}
