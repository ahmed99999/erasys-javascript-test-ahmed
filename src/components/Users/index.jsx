import React, { Component } from 'react';
import UserClass from '../../services/usersService';
import User from '../User';
import Loading from '../common/Loading';
import Pagination from '../common/Pagination';
import { paginate } from '../../utils/paginate';
import './style.css';

class Users extends Component {
    state = {
        users: [],
        currentPage: 1,
        isloaded: false,
        totalPages: 0,
        NumberOfPages: 10
    };

    async componentDidMount() {
        const { usersNumber } = this.props;
        const users = await UserClass.getUsers(usersNumber);
        this.setState({ users, isloaded: true, totalPages: users.length });
    }

    getPaginatedUsers = users => {
        const { currentPage, NumberOfPages } = this.state;
        return paginate(users, currentPage, NumberOfPages);
    };

    handlePage = currentPage => {
        this.setState({ currentPage });
    };

    render() {
        const { users, isloaded, currentPage, totalPages, NumberOfPages } = this.state;
        const paginatedUsers = this.getPaginatedUsers(users);
        return (
            <div>
                {!isloaded && <Loading />}
                {isloaded && <div>
                    <div className="row users">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                {paginatedUsers.map(user => (
                                    <User key={user.id} user={user} />
                                ))}
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div>
                        <div className="col-1"></div>
                        <div className="col-10">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                handlePage={this.handlePage}
                                NumberOfPages={NumberOfPages}
                            />
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default Users;