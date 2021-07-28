import React from 'react';
import { ChildSolution01 } from './child-solution01';
import { QUERY, QUERY_ARR } from './test-data';
import './test.css';


/*
    [Solution01] Fully controlled component
        ChildSolution01에는 State가 없고, parent에서 다 관리하는 방향인데,
        child component가 간단하면 parent에서 완전히 컴포넌트를 제어할만 하겠지만, 간단하지 않으면 child component 비즈니스 로직이 parent에 다 집중되네
 */

interface IProps {
}

interface IState {
    selectedIndex: number;
    query: QUERY;
}

export class ParentSolution01 extends React.Component<IProps, IState> {
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
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                Parent Solution01
                <div style={{ width: '200px', height: '610px', margin: '10px' }}>
                    <ul>
                        {this.queryList}
                    </ul>
                </div>
                <div style={{ width: '500px', height: '610px', margin: '10px', border: '1px solid' }}>
                    <ChildSolution01 query={this.state.query}
                        onChangeId={(ev: React.ChangeEvent) => this.onChangeId(ev)}
                        onChangeText={(ev: React.ChangeEvent) => this.onChangeText(ev)} />
                </div>
            </div>
        );
    }
}
