import {ActionsTypes} from "./redux-store";

export type UserType = {
    id: number
    name: string
    uniqueUrlName?: string
    photos: { small: string, large: string }
    status?: string
    followed: boolean
}

export type UsersPageType = {
    users: Array<UserType>
}

let initialState: UsersPageType = {
    users: [
        // {
        //     id: v1(),
        //     followed: true,
        //     fullName: 'Marat Abdulin',
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Jean-Paul_Marat_portre.jpg',
        //     status: 'student',
        //     location: {city: 'Istanbul', country: 'Turkey'}
        // },
        // {
        //     id: v1(),
        //     followed: true,
        //     fullName: 'Maslennikova Margarita',
        //     photoUrl: 'https://uznayvse.ru/images/catalog/2022/3/margot-robbie_87.jpg',
        //     status: 'the big director',
        //     location: {city: 'Istanbul', country: 'Turkey'}
        // },
        // {
        //     id: v1(),
        //     followed: false,
        //     fullName: 'Ivan Ivanov',
        //     photoUrl: 'https://img.a.transfermarkt.technology/portrait/big/386762-1648907641.png?lm=1',
        //     status: 'worker',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: v1(),
        //     followed: false,
        //     fullName: 'Vasily Vasilev',
        //     photoUrl: 'https://cdn.7days.ru/upload/images/d3c/1aa2fa814779c7841099dcaa99bb7.jpg',
        //     status: 'worker',
        //     location: {city: 'Lipetsk', country: 'Russia'}
        // },
    ],
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users}) as const

export default usersReducer;
