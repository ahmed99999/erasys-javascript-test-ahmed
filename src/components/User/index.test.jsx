import React from 'react';
import reactDOM from 'react-dom';
import User from './index'
import './style.css';

it('renders without crashing', () => {
    const userDiv = document.createElement('div');
    userDiv.className = "card";
    const image = document.createElement('img');
    image.className = "card-img-top";
    image['alt'] = '...';
    const div = document.createElement('div');
    div.className = "card-body";
    const h5 = document.createElement('h5');
    h5.className = "card-title";
    h5.innerText = "25 | ahmed";
    const p = document.createElement('p');
    p.className = "card-text";
    p.innerText = "13 km";
    const divBody = document.createElement('div');
    divBody.className = "card-body";
    const button = document.createElement('button');
    button.className = "btn btn-primary";
    button.innerText = "Show more information";
    div.appendChild(h5);
    div.appendChild(p);
    divBody.appendChild(button);
    userDiv.appendChild(div);
    userDiv.appendChild(divBody);

    const user = {
        name: "ahmed",
        personal: { age: 25 },
        location: { distance: 13 }
    };
    reactDOM.render(<User user={user} />, userDiv);
});