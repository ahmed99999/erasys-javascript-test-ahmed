import React, { useState } from 'react';

const User = ({ user }) => {
    const [detailed, setDetailed] = useState(false);

    const ButtonText = !detailed ? "Show more information" : "Show less information";
    const lastLogin = (new Date() - new Date(user.last_login)) / (1000 * 60);
    const { url: imageUrl } = { ...user.picture };
    return (
        <div className="card" style={{ width: "18rem", margin: '13px' }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{detailed && `${user.personal.age} | `}{user.name}</h5>
                <p className="card-text">{detailed && user.headline}</p>
            </div>
            {detailed && <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.location.city}</li>
                <li className="list-group-item">{user.location.distance} km</li>
                <li className="list-group-item">active {lastLogin} minutes ago</li>
            </ul>}
            <div className="card-body">
                <button className="btn btn-primary" onClick={() => setDetailed(!detailed)}>{ButtonText}</button>
            </div>
        </div>
    );
}

export default User;