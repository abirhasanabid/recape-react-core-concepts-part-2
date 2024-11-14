import { useState } from "react";

const Players = () => {
    const [player, setPlayer] = useState(0);

    const handleAddPlayer = () => {
        setPlayer(player + 1);
    };
    const handleRemovePlayer = () => {
        setPlayer(player - 1);
    };
    return (
        <div style={{ border: '2px solid purple', borderRadius: '12px', padding: '15px', margin: '10px' }}>
            <h2>Players : {player}</h2>
            <button onClick={handleAddPlayer}>Add</button>
            <button onClick={handleRemovePlayer}>Remove</button>
        </div>
    );
};

export default Players;