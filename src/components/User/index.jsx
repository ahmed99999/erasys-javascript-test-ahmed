import React, { Component } from 'react';

const User = ({ user, detailed }) => {
    return (
        <React.Fragment>
            {!detailed && <div className="card" style="width: 18rem;">
                <img src={user.picture.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {user.personal.age} | {user.name}</h5>
                    <p className="card-text">{user.headline}</p>
                    <button className="btn btn-primary">Show more information</button>
                </div>
            </div>}
        </React.Fragment>
    );
}

export default User;