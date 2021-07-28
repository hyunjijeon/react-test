import React from 'react';
import { QUERY } from './test-data';

interface IProps {
    query: QUERY;
}

interface IState {
    query: QUERY;
    previousId: string;
}

export class ChildAnti02 extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            query: this.props.query,
            previousId: this.props.query.id
        };
    }

    // state, prop 변경, 부모 render 시점에 호출됨
    // previousId enables to access the previous props value in the same way as is done in componentWillReceiveProps
    static getDerivedStateFromProps(props: IProps, state: IState) {
        if (props.query.id !== state.previousId) { // props이 변경된 경우
            return {
                query: props.query,
                previousId: props.query.id
            };
        } else {//state가 변경된 경우
            return state;
        }
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
                ChildAnti02
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