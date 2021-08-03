import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EditorPage } from './editor';
import { myEditorReducers } from './editor-redux';

export class EditorRootReduxHooks extends React.Component {

    store1 = createStore(myEditorReducers);
    store2 = createStore(myEditorReducers);
    
    render(): React.ReactNode {
        return (
            <div style={{display: 'flex'}}>
                <div style={{ width: '50%', height: '50%' }}>
                    <Provider store={this.store1}>
                        <EditorPage />
                    </Provider>
                </div>
                <div style={{ width: '50%', height: '50%' }}>
                    <Provider store={this.store2}>
                        <EditorPage />
                    </Provider>
                </div>
            </div>
        );
    }
}

