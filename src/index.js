import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import func from './funcs-1';
const completed = func(5,8);

console.log(`Completed: ${completed}`);
console.log(`*2: ${completed * 2}`);
console.log(`*2: ${completed * 4}`);
console.log(`*3: ${completed * 8}`);
console.log(`*3: ${completed * 16}`);

ReactDOM.render(<App />, document.getElementById('root'));
