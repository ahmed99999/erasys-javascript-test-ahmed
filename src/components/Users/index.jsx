import React, { Component } from 'react';
import User from '../../services/usersService';

class Users extends Component {
    state = {
        users: [],
        isloaded: false
    };

    async componentDidMount() {
        const users = await User.getUsers(32);
        console.log(users);
        this.setState({ users, isloaded: true });
    }

    render() {
        const { users, isloaded } = this.state;

        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

export default Users;