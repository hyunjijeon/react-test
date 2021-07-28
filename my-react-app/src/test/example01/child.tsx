import React from 'react';
import { QUERY } from './test-data';

interface IProps {
    query: QUERY;
}

interface IState {
    query: QUERY;
}

export class ChildComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            query: this.props.query
        };
    }

    onChangeId(ev: React.ChangeEvent): void {
        const elm = ev.target as HTMLInputElement;
        this.setState({
            query: {
                ...this.state.query,
                id: elm.value
            }
        });
    }

    onChangeText(ev: React.ChangeEvent): void {
        const elm = ev.target as HTMLInputElement;
        this.setState({
            query: {
                ...this.state.query,
                text: elm.value
            }
        });
    }

    render(): React.ReactNode {
        return (
            <div style={{ width: '100%', height: '100%', border: '1px solid'}}>
                Child
                <div style={{ display: 'flex' }}>
                    <p style={{ width: '200px' }}>id: </p>
                    <input value={this.state.query.id} onChange={(ev) => this.onChangeId(ev)}></input>
                </div>
                <div style={{ display: 'flex', marginTop: '20px'}}>
                    <p style={{ width: '200px' }}>query: </p>
                    <input value={this.state.query.text} onChange={(ev) => this.onChangeText(ev)}></input>
                </div>
            </div>
        );
    }
}