import {ActionsTypes} from './redux-store';

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type SetUsersCurrentPageType = ReturnType<typeof setUsersCurrentPageAC>
export type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCountAC>

let initialState: UsersPageType = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case 'SET-USERS':
            return {...state, users: action.users};
        case 'SET-USERS-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':
            const totalUsersCountMax = action.totalCount > 200 ? 200 : action.totalCount
            return {...state, totalUsersCount: totalUsersCountMax}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const
export const setUsersCurrentPageAC = (currentPage: number) => ({type: 'SET-USERS-CURRENT-PAGE', currentPage}) as const
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount}) as const


export default usersReducer;
