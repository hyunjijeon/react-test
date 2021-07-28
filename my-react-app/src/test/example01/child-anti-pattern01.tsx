import React from 'react';
import { QUERY } from './test-data';

interface IProps {
    query: QUERY;
}

interface IState {
    query: QUERY;
}

export class ChildAnti01 extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            query: this.props.query
        };
    }

    // props으로 부터 state가 업데이트 되야하는 경우 (== useEffect), 오용 될 수 있어서 16.3 버전부터 deprecated 됨
    // 실제 prop에는 여러 프로퍼티들이 있음, 그것들을 모두 검사해서 true/false를 판단하기는 어렵다
    componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.query.id !== this.props.query.id) {
            this.setState({
                query: nextProps.query
            });
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
                ChildAnti01
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