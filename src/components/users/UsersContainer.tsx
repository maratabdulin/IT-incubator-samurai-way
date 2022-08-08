import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    setUsers,
    setUsersCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../preloader/preloader';
import {usersAPI} from '../../api/api';

export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setUsersCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    onChangeClick = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setUsersCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                setUsersCurrentPage={this.props.setUsersCurrentPage}
                setUsersTotalCount={this.props.setUsersTotalCount}
                onPageClick={this.onChangeClick}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setUsersCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersContainer)
