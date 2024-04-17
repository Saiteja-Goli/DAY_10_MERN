import React from 'react';
import HeavyComputation from './Components/HeavyComputation';


const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape','apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

const App = () => {
    return (
        <div>
            <h1>Optimized Component with useMemo</h1>
            <HeavyComputation items={items} />
        </div>
    );
};

export default App;
