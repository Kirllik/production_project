import React, {useState} from 'react';
import classes from './Counter.module.scss'

export  const Counter = () => {
    const [value, setValue] = useState(0)

    return (
        <div className={classes.btn}>
            <h1>{value}</h1>
            <button style={{padding:10}} onClick={() => setValue(value + 1)}>Increments</button>
        </div>
    );
};
