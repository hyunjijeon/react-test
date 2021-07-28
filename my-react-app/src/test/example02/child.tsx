import React from 'react';
import { QUERY } from '../example01/test-data';

interface IProps01 {
    query: QUERY;
    onChangeId: Function;
}

interface IProps02 {
    query: QUERY;
    onChangeText: Function;
}

export class Child01 extends React.Component<IProps01> {
    render(): React.ReactNode {
        console.log("[render] ============== Child01111111111111111 ");
        return (
            <div style={{ display: 'flex' }}>
                <p style={{ width: '200px' }}>id: </p>
                <input value={this.props.query.id} onChange={(ev) => this.props.onChangeId(ev)}></input>
            </div>
        );
    }
}

export class Child02 extends React.Component<IProps02> {
    render(): React.ReactNode {
        console.log("[render] ============== Child022222222222222 ");
        return (
            <div style={{ display: 'flex', marginTop: '20px' }}>
                <p style={{ width: '200px' }}>query: </p>
                <input value={this.props.query.text} onChange={(ev) => this.props.onChangeText(ev)}></input>
            </div>
        );
    }
}