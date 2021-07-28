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

    // props으로 부터 state가 업데이트 되야하는 경우 (== useEffect), 오용 될 수 있어서 16.3 버전부터 deprecated 됨
    // state에 이전의 prop의 id를 기록해서 props이 변경된 경우에 state 업데이트
    // componentWillReceiveProps(nextProps: Props) {
    //     if (nextProps.query.id !== this.state.previousId) {
    //         this.setState({ ...this.state, previousId: nextProps.id});
    //     }
    // }

    // state, prop 변경, 부모 render 시점에 호출됨
    // previousId enables to access the previous props value in the same way as is done in componentWillReceiveProps
    // static getDerivedStateFromProps(props: IProps, state: IState) {
    //     if (props.query.id !== state.previousId) { 
    //         return {
    //             ...state,
    //             query: {
    //                 id: props.query.id
    //             },
    //             previousId: props.query.id
    //         };
    //     } else {//state가 변경된 경우
    //         return state;
    //     }
    // }

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