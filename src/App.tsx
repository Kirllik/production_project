import React from 'react';
import {Counter} from "./component/Counter";
import './component/index.scss'

const App = () => {
    return (
        <div className="app">
            Counter
            <Counter/>
        </div>
    );
};

export default App;