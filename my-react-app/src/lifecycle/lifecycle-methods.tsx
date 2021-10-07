import React, { useState } from "react";

interface IProps {
    initialCount: number;
}

interface IState {
    count: number;
}

export const Example = () => {

    const [isMount, setIsMount] = useState(true);

    const [count, setCount] = useState(1);

    return (
        <div style={{ border: '1px solid red', width: 1000, height: 1000 }}>
            <p>Lifecycle Example</p>
            <button onClick={() => setCount(0)}>
                Update Parent Props
            </button>
            <button onClick={() => setIsMount(false)}>
                Unmount
            </button>
            {
                isMount ? <Parent initialCount={count} /> : null
            }
        </div>
    );
}

class Parent extends React.Component<IProps, IState> {
    // 컴포넌트가 생성될 때 호출됨
    constructor(props: IProps) {
        console.log("[Parent] constructor ");
        super(props);
        this.state = { count: 0 };
    }

    // 컴포넌트가 마운트될 때와 업데이트될 때 호출됨 -> props 기반으로 state를 설정할 때 사용됨
    static getDerivedStateFromProps(nextProps: IProps, prevState: IState): IState | null {
        console.log("[Parent] getDerivedStateFromProps ");
        return null;
    }

    // 컴포넌트 업데이트시 render 직전에 호출됨 -> 리렌더링 할지 말지 결정할 때 사용
    shouldComponentUpdate(nextProps: IProps) {
        console.log("[Parent] shouldComponentUpdate ");
        return true;
    }

    render() {
        console.log("[Parent] render ");
        return (
            <div style={{ border: '1px solid white', width: 500, height: 500 }}>
                <p>Parent count: {this.state.count}</p>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>
                    update count
                </button>
                <Child initialCount={10} />
            </div>
        );
    }

    getSnapshotBeforeUpdate(preProps: IProps, preState: IState) {
        console.log("[Parent] getSnapshotBeforeUpdate ");
        return null;
    }

    componentDidMount() {
        console.log("[Parent] componentDidMount ");
    }

    componentDidUpdate() {
        console.log("[Parent] componentDidUpdate ");
    }

    componentWillUnmount() {
        console.log("[Parent] componentWillUnmount ");
    }

    componentDidCatch() {
        console.log("[Parent] componentDidCatch ");
    }
}

class Child extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        console.log("[Child] constructor ");
        super(props);
        this.state = { count: 0 };
    }

    static getDerivedStateFromProps(nextProps: IProps, prevState: IState): IState | null {
        console.log("[Child] getDerivedStateFromProps ");
        return null;
    }

    shouldComponentUpdate(nextProps: IProps) {
        console.log("[Child] shouldComponentUpdate ");
        return true;
    }

    render() {
        console.log("[Child] render ");
        return (
            <div style={{ border: '1px solid white', width: 250, height: 250 }}>
                <p>Child count: {this.state.count}</p>
                <button onClick={() =>
                    this.setState({
                        count: this.state.count + 1
                    })
                }>
                    update count
                </button>
            </div>
        );
    }

    getSnapshotBeforeUpdate(preProps: IProps, preState: IState) {
        console.log("[Child] getSnapshotBeforeUpdate ");
        return null;
    }

    componentDidMount() {
        console.log("[Child] componentDidMount ");
    }

    componentDidUpdate() {
        console.log("[Child] componentDidUpdate ");
    }

    componentWillUnmount() {
        console.log("[Child] componentWillUnmount ");
    }

    componentDidCatch() {
        console.log("[Child] componentDidCatch ");
    }
}