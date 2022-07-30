import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userDefaultPhoto from '../../assets/images/user-image.jpg'

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        const onChangeClick = (pageNumber: number) => {
            this.props.setCurrentPage(pageNumber);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }

        return <div>
            <div>
                {pages.map(page => {
                    return <span
                        className={this.props.currentPage === page ? s.selectedPage : ''}
                        onClick={()=>onChangeClick(page)}
                    >{page}</span>
                })}
            </div>
            {
                this.props.users.map(el =>
                    <div key={el.id}>
                        <div>
                            <div>
                                <img className={s.avatarImage} src={el.photos.large !== null ? el.photos.small : userDefaultPhoto} alt="Avatar photo"/>
                            </div>
                            <div>
                                {el.followed
                                    ? <button onClick={() => this.props.follow(el.id)}>Follow</button>
                                    : <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{el.name}</div>
                                <div>{el.status}</div>

                            </div>
                            <div>
                                <div>{'el.location.city'}</div>
                                <div>{'el.location.country'}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Users;
