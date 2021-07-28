import React from 'react';
import { ChildSolution02 } from './child-solution02';
import { QUERY_ARR } from './test-data';
import './test.css';


/*
    [Solution02] Fully uncontrolled component with a key
        react key 속성을 사용해서 prop 변경시 component를 재생성하여 prop 기반의 state를 업데이트하는 방식
        component의 key 값이 존재할 경우 사용 가능할듯
 */

interface IProps {
}

interface IState {
    selectedIndex: number;
}

export class ParentSolution02 extends React.Component<IProps, IState> {
    queryList: JSX.Element[] = [];

    constructor(props: IProps) {
        super(props);
        QUERY_ARR.forEach(element => {
            this.queryList.push(<li className="test-list" onClick={ev => this.listOnClick(ev)}>{element.id}</li>);
        });
        this.state = {
            selectedIndex: 0
        };
    }

    listOnClick(ev: React.MouseEvent): void {
        const elm = ev.target as HTMLLIElement;;
        const clickId = elm.textContent;
        QUERY_ARR.forEach((elm, index) => {
            if (elm.id === clickId) {
                console.log("click index - " + index);
                this.setState({
                    selectedIndex: index
                });
            }
        })
    }

    render(): React.ReactNode {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                ParentSolution02
                <div style={{ width: '200px', height: '610px', margin: '10px' }}>
                    <ul>
                        {this.queryList}
                    </ul>
                </div>
                <div style={{ width: '500px', height: '610px', margin: '10px', border: '1px solid' }}>
                    
                    <ChildSolution02 key={QUERY_ARR[this.state.selectedIndex].key} query={QUERY_ARR[this.state.selectedIndex]} />
                </div>
            </div>
        );
    }
}