import { useCallback, useMemo, useState } from 'react';

export const Example = () => {
    const [count, setCount] = useState(0);

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [minus, setMinus] = useState(0);

    // const sum = parseInt(a) + parseInt(b);

    // a, b 값이 변경되었을 때만 memoizedSum 값이 다시 선언된다
    const memoizedSum = useMemo(() => {
        console.log("useMemo execute");
        return parseInt(a) + parseInt(b);
    }, [a, b]);

    // a, b 값이 변경되었을때만 memoizedComputeMinuse 함수가 다시 선언된다.
    const memoizedComputeMinus = useCallback(() => {
        console.log("useCallback execute");
        setMinus(parseInt(a) - parseInt(b));
    }, [a, b]);

    return (
        <div style={{ border: '1px solid white', width: 500, height: 500 }}>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
            <div>
                <label>A: <input value={a} onChange={(e) => setA(e.target.value)}></input></label>
                <label>B: <input value={b} onChange={(e) => setB(e.target.value)}></input></label>
                <p>A + B = {memoizedSum}</p>
                <button onClick={memoizedComputeMinus}>
                    Compute
                </button>
                <p>A - B = {minus}</p>
            </div>
        </div>
    );
}

