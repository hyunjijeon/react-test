import React from 'react';
import { QUERY, QUERY_ARR } from '../example01/test-data';
import '../example01/test.css';
import { Child01, Child02 } from './child';


/*
    [Fully controlled component, State 끌어올리기]
        불필요한 rerendering 문제
        ChildComponent에서 state가 변경된 경우 state 끌어올리기를 통해 부모 state가 바껴서 모든 Child가 rerendering 되는 문제
 */

interface IProps {
}

interface IState {
    selectedIndex: number;
    query: QUERY;
}

export class Parent extends React.Component<IProps, IState> {
    queryList: JSX.Element[] = [];

    constructor(props: IProps) {
        super(props);
        QUERY_ARR.forEach(element => {
            this.queryList.push(<li className="test-list" onClick={ev => this.listOnClick(ev)}>{element.id}</li>);
        });
        this.state = {
            selectedIndex: 0,
            query: QUERY_ARR[0]
        };
    }

    onChangeId(ev: React.ChangeEvent): void {
        const elm = ev.target as HTMLInputElement;
        this.setState({
            ...this.state,
            query: {
                ...this.state.query,
                id: elm.value
            }
        });
    }

    onChangeText(ev: React.ChangeEvent): void {
        const elm = ev.target as HTMLInputElement;
        this.setState({
            ...this.state,
            query: {
                ...this.state.query,
                text: elm.value
            }
        });
    }

    listOnClick(ev: React.MouseEvent): void {
        const elm = ev.target as HTMLLIElement;;
        const clickId = elm.textContent;
        QUERY_ARR.forEach((elm, index) => {
            if (elm.id === clickId) {
                console.log("click index - " + index);
                this.setState({
                    selectedIndex: index,
                    query: QUERY_ARR[index]
                });
            }
        })
    }

    render(): React.ReactNode {
        console.log("[render] ============== Parent ");
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                Parent [rerender test]
                <div style={{ width: '200px', height: '610px', margin: '10px' }}>
                    <ul>
                        {this.queryList}
                    </ul>
                </div>
                <div style={{ width: '500px', height: '610px', margin: '10px', border: '1px solid' }}>
                    <div style={{ width: '100%', height: '100%', border: '1px solid' }}>
                        Child01 - Child02
                        <Child01 query={this.state.query}
                        onChangeId={(ev: React.ChangeEvent) => this.onChangeId(ev)} />
                        <Child02 query={this.state.query}
                        onChangeText={(ev: React.ChangeEvent) => this.onChangeText(ev)} />
                    </div>
                </div>
            </div>
        );
    }
}
