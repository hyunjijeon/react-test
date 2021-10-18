import { useEffect, useState } from 'react';


export const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Effect callback function execute!`);
		// 브라우저 API를 이용해서 문서 타이틀을 업데이트함
		document.title = `You clicked ${count} times`;

        return () => {
            console.log(`clean-up function execute! ${count}`);
        };
	});

    useEffect(() => {
        console.log(`Effect callback function execute! (dependsOnArr = [])`);
	}, []);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// hooks-useeffect.tsx:9 Effect callback function execute!
// hooks-useeffect.tsx:19 Effect callback function execute! (dependsOnArr = [])
// hooks-useeffect.tsx:14 clean-up function execute! 0
// hooks-useeffect.tsx:9 Effect callback function execute!
// hooks-useeffect.tsx:14 clean-up function execute! 1
// hooks-useeffect.tsx:9 Effect callback function execute!
// hooks-useeffect.tsx:14 clean-up function execute! 2
// hooks-useeffect.tsx:9 Effect callback function execute!
// hooks-useeffect.tsx:14 clean-up function execute! 3
// hooks-useeffect.tsx:9 Effect callback function execute!