import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const HeavyComputation = ({ items }) => {
    const [filterTerm, setFilterTerm] = useState('');

    const filteredItems = useMemo(() => {
        console.time('filtering');
        const filtered = items.filter(item => item.includes(filterTerm));
        console.timeEnd('filtering');
        return filtered;
    }, [items, filterTerm]);


    const handleChange = (e) => {
        setFilterTerm(e.target.value);
    };

    return (<>
        <div>HeavyComputation</div>
        <div>
            <input
                type="text"
                value={filterTerm}
                onChange={handleChange}
                placeholder="Filter items"
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </>
    )
}

export default HeavyComputation