import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EditorContainer } from './editor';
import { myEditorReducers } from './editor-redux';

export class EditorRoot extends React.Component {

    store1 = createStore(myEditorReducers);
    store2 = createStore(myEditorReducers);
    
    render(): React.ReactNode {
        return (
            <div style={{display: 'flex'}}>
                <div style={{ width: '50%', height: '50%' }}>
                    <Provider store={this.store1}>
                        <EditorContainer />
                    </Provider>
                </div>
                <div style={{ width: '50%', height: '50%' }}>
                    <Provider store={this.store2}>
                        <EditorContainer />
                    </Provider>
                </div>
            </div>
        );
    }
}

