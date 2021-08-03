import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Child01 } from './child01';
import { Child02 } from './child02';
import { MyEditorActions, MyEditorRootState } from './editor-redux';
import { QUERY, QUERY_ARR } from './test-data';
import './test.css';

export const EditorPage = () => {
    const dispatch = useDispatch();
    const editorState = useSelector((state: MyEditorRootState) => state.editorState);

    const listOnClick = (ev: React.MouseEvent) => {
        const elm = ev.target as HTMLLIElement;
        const clickId = elm.textContent;
        QUERY_ARR.forEach((elm, index) => {
            if (elm.id === clickId) {
                console.log("click index - " + index);
                dispatch(MyEditorActions.changeSelectedIndex(index));
            }
        })
    };

    const queryList: JSX.Element[] = QUERY_ARR.map(element => {
        return (<li className="test-list" onClick={ev => listOnClick(ev)}>{element.id}</li>);
    });

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', border: '1px solid', marginLeft: '20px' }}>
            Parent
            <div style={{ width: '300px', height: '610px', margin: '10px', marginRight: '40px' }}>
                <ul>
                    {queryList}
                </ul>
                <div>
                    selectedQuery<br></br>
                    id: {(editorState.selectedQuery as QUERY).id} <br></br>
                    text: {(editorState.selectedQuery as QUERY).text} <br></br>
                </div>
            </div>
            <div style={{ width: '500px', height: '610px', margin: '10px', border: '1px solid' }}>
                <div style={{ width: '100%', height: '100%', border: '1px solid' }}>
                    Child
                    <Child01 />
                    <Child02 />
                </div>
            </div>
        </div>
    );
}