import React, {FC} from 'react';
import s from './Users.module.css';
import userDefaultPhoto from '../../assets/images/user-image.jpg';
import {UsersContainerPropsType} from './UsersContainer';

type UsersPropsType = UsersContainerPropsType & {onPageClick: (page: number) => void}

const Users: FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span
                        className={props.currentPage === page ? s.selectedPage : ''}
                        onClick={()=>props.onPageClick(page)}
                    >{page}</span>
                })}
            </div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                        <div>
                            <div>
                                <img className={s.avatarImage} src={el.photos.large !== null ? el.photos.small : userDefaultPhoto} alt="Avatar photo"/>
                            </div>
                            <div>
                                {el.followed
                                    ? <button onClick={() => props.follow(el.id)}>Follow</button>
                                    : <button onClick={() => props.unfollow(el.id)}>Unfollow</button>}
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
