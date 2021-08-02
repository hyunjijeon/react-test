import React from 'react';
import { Child01, Child02 } from './child';
import { QUERY, QUERY_ARR } from './test-data';
import './test.css';

interface IProps {
}

export interface MyState {
    queryList: QUERY[];
    selectedIndex: number;
    selectedQuery?: QUERY;
}

export interface MyAction {
    setQuery: Function,
}

export interface MyContextValue {
    state: MyState;
    action: MyAction;
}

const defaultState: MyState = {
    queryList: [],
    selectedIndex: 0
}

const defaultContext: MyContextValue = {
    state: defaultState,
    action: {
        setQuery: () => { }
    }
}

export const MyContext = React.createContext<MyContextValue>(defaultContext);
// MyContext.Provider - context를 하위 컴포넌트로 전달하는 역할
// MyContext.Consumer - context 변화를 구독하는 컴포넌트

export class ContextParent extends React.Component<IProps, MyState> {
    queryList: JSX.Element[] = [];

    constructor(props: IProps) {
        super(props);

        this.state = {
            queryList: QUERY_ARR,
            selectedIndex: 0,
            selectedQuery: QUERY_ARR[0]
        };

        QUERY_ARR.forEach(element => {
            this.queryList.push(<li className="test-list" onClick={ev => this.listOnClick(ev)}>{element.id}</li>);
        });
    }

    listOnClick(ev: React.MouseEvent): void {
        const elm = ev.target as HTMLLIElement;;
        const clickId = elm.textContent;
        QUERY_ARR.forEach((elm, index) => {
            if (elm.id === clickId) {
                console.log("click index - " + index);
                this.setState({
                    ...this.state,
                    selectedIndex: index,
                    selectedQuery: QUERY_ARR[index]
                });
            }
        })
    }

    setQuery(query: QUERY): void {
        this.setState({
            ...this.state,
            selectedQuery: query
        });
    }

    setId(id: string): void {
        this.setState({
            ...this.state,
            selectedQuery: {
                ...this.state.selectedQuery as QUERY,
                id: id
            }
        });
    }

    setText(text: string): void {
        this.setState({
            ...this.state,
            selectedQuery: {
                ...this.state.selectedQuery as QUERY,
                text: text
            }
        });
    }

    render(): React.ReactNode {
        const context: MyContextValue = {
            state: this.state,
            action: {
                setQuery: (query: QUERY) => this.setQuery(query)
            }
        }
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                Parent
                <div style={{ width: '300px', height: '610px', margin: '10px', marginRight: '40px' }}>
                    <ul>
                        {this.queryList}
                    </ul>
                    <div>
                        selectedQuery<br></br>
                        id: {(this.state.selectedQuery as QUERY).id} <br></br>
                        text: {(this.state.selectedQuery as QUERY).text} <br></br>
                    </div>
                </div>
                <div style={{ width: '500px', height: '610px', margin: '10px', border: '1px solid' }}>
                    <div style={{ width: '100%', height: '100%', border: '1px solid' }}>
                        Child
                        <MyContext.Provider value={context}>
                            <Child01></Child01>
                            <Child02></Child02>
                        </MyContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}
