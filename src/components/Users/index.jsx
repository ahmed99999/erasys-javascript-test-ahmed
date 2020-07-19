import React, { Component } from 'react';

class Users extends Component {
    state = {
        users: [],
        isloaded: false
    }

    async componentDidMount() {

    }

    render() {
        const { users } = this.state;

        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

export default Users;