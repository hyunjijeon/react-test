import React from 'react';
import {
    MyContext,
    MyContextValue,
    //  MyState 
} from './parent';


export class Child01 extends React.Component {
    onChangeId(ev: React.ChangeEvent, context: MyContextValue): void {
        const elm = ev.target as HTMLInputElement;

        context.action.setQuery({
            ...context.state.selectedQuery,
            id: elm.value
        });
    }

    render(): React.ReactNode {
        console.log("render child 0111111111111111111111");
        return (
            <MyContext.Consumer>
                {(context: MyContextValue) => (
                    <div style={{ display: 'flex' }}>
                        <p style={{ width: '200px' }}>id: </p>
                        <input value={(context.state.selectedQuery) ? context.state.selectedQuery.id : ""}
                            onChange={(ev) => this.onChangeId(ev, context)}
                        ></input>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export class Child02 extends React.Component {
    onChangeText(ev: React.ChangeEvent, context: MyContextValue): void {
        const elm = ev.target as HTMLInputElement;
        context.action.setQuery({
            ...context.state.selectedQuery,
            text: elm.value
        });
    }

    render(): React.ReactNode {
        console.log("render child 022222222222222222222222");
        return (
            <MyContext.Consumer>
                {(context: MyContextValue) => (
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <p style={{ width: '200px' }}>query: </p>
                        <input value={(context.state.selectedQuery) ? context.state.selectedQuery.text : ""}
                            onChange={(ev) => this.onChangeText(ev, context)}
                        ></input>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}