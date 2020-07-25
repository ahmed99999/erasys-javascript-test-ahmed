import React, { useState } from 'react';
import moment from 'moment';
import './style.css';

const User = ({ user }) => {
    const [detailed, setDetailed] = useState(false);

    const ButtonText = !detailed ? "Show more information" : "Show less information";

    const lastLoginUnitesCount = () => {
        const lastLogin = new Date(user.last_login);
        const differenceInMonths = moment().diff(lastLogin, 'months');
        const differenceInDays = moment().diff(lastLogin, 'days');
        const differenceInHours = moment().diff(lastLogin, 'hours');
        const differenceInMinutes = moment().diff(lastLogin, 'minutes');

        if (differenceInMonths > 1) return `${differenceInMonths} months`;
        if (differenceInDays > 1) return `${differenceInDays} days`;
        if (differenceInHours > 1) return `${differenceInHours} hours`;
        if (differenceInMinutes > 1) return `${differenceInMinutes} minutes`;
    };

    const { url: imageUrl } = { ...user.picture };
    const onlineStatusClass = (user.online_status === 'ONLINE') ? 'logged-in' : 'logged-out';
    return (
        <div className="card" style={{ width: "18rem", margin: '13px' }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{`${user.personal.age} | ${user.name}`}</h5>
                <p className="card-text">{`${user.location.distance} km`} | <span className={onlineStatusClass}>●</span></p>
                <p className="card-text">{detailed && user.headline}</p>
            </div>
            {detailed && <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.location.city}</li>
                <li className="list-group-item">{`active ${lastLoginUnitesCount()} ago`}</li>
            </ul>}
            <div className="card-body">
                <button className="btn btn-primary" onClick={() => setDetailed(!detailed)}>{ButtonText}</button>
            </div>
        </div>
    );
}

export default User;