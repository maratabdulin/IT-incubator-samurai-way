import React, {FC} from 'react';
import s from './Users.module.css';
import userDefaultPhoto from '../../assets/images/user-image.jpg';
import {MapDispatchToPropsType, MapStateToPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';

type UsersPropsType = Omit<MapStateToPropsType, 'isFetching'>
    & Omit<MapDispatchToPropsType, 'getUsers'> & { onPageClick: (page: number) => void }

const Users: FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((page, id) => {
                    return <span
                        className={props.currentPage === page ? s.selectedPage : ''}
                        onClick={() => props.onPageClick(page)}
                        key={id}
                    >{page}</span>
                })}
            </div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img className={s.avatarImage} src={el.photos.large !== null ? el.photos.small : userDefaultPhoto} alt="Avatar photo"/>
                                </NavLink>
                            </div>
                            <div>
                                {el.followed
                                    ?
                                    <button
                                        disabled={props.followingInProgress.some(id => id === el.id)}
                                        onClick={() => { props.unfollow(el.id) }}
                                    >Unfollow</button>
                                    : <button
                                        disabled={props.followingInProgress.some(id => id === el.id)}
                                        onClick={() => { props.follow(el.id) }}
                                    >Follow</button>}
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
    );
};

export default Users;
