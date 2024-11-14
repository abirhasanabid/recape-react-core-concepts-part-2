import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={handleCount}>Count : {count}</button>
        </div>
    );
};

export default Count;