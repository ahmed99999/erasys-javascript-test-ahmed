import React from 'react';
import reactDOM from 'react-dom';
import Loading from './index'
import './style.css';

it('renders without crashing', () => {
    const div = document.createElement('div');
    div.className = "center";
    reactDOM.render(<Loading />, div);
});