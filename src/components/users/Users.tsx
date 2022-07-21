import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userDefaultPhoto from '../../assets/images/user-image.jpg'

const Users: FC<UsersPropsType> = (props) => {


    if (props.users.length == 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            })
    }
    console.log(props)
    return (
        <div>
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
