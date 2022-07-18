import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

const Users: FC<UsersPropsType> = (props) => {
    return (
        <div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                        <div>
                            <div>
                                <img className={s.avatarImage} src={el.photoUrl} alt="Avatar photo"/>
                            </div>
                            <div>
                                {el.followed
                                    ? <button onClick={()=> props.follow(el.id)}>Follow</button>
                                    : <button onClick={()=> props.unfollow(el.id)}>Unfollow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>

                            </div>
                            <div>
                                <div>{el.location.city}</div>
                                <div>{el.location.country}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Users;
