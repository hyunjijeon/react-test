import React from 'react';
import { QUERY } from './test-data';

interface IProps {
    query: QUERY;
    onChangeId: Function;
    onChangeText: Function;
}

export class ChildSolution01 extends React.Component<IProps> {
    render(): React.ReactNode {
        return (
            <div style={{ width: '100%', height: '100%', border: '1px solid'}}>
                ChildSolution01
                <div style={{ display: 'flex' }}>
                    <p style={{ width: '200px' }}>id: </p>
                    <input value={this.props.query.id} onChange={(ev) => this.props.onChangeId(ev)}></input>
                </div>
                <div style={{ display: 'flex', marginTop: '20px'}}>
                    <p style={{ width: '200px' }}>query: </p>
                    <input value={this.props.query.text} onChange={(ev) => this.props.onChangeText(ev)}></input>
                </div>
            </div>
        );
    }
}