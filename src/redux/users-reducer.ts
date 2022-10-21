import {ActionsTypes, AppThunk} from './redux-store';
import {followUnfollowAPI, usersAPI} from '../api/api';

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
    isFetching: boolean
    followingInProgress: number[]
}

export type FollowActionType = ReturnType<typeof followSuccess>
export type UnfollowActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetUsersCurrentPageType = ReturnType<typeof setUsersCurrentPage>
export type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

let initialState: UsersPageType = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case 'SET-USERS':
            return {...state, users: action.users};
        case 'SET-USERS-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':
            const totalUsersCountMax = action.totalCount > 200 ? 200 : action.totalCount
            return {...state, totalUsersCount: totalUsersCountMax}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const
export const setUsersCurrentPage = (currentPage: number) => ({type: 'SET-USERS-CURRENT-PAGE', currentPage}) as const
export const setUsersTotalCount = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS',
    followingInProgress,
    userId
}) as const

export const getUsers = (page: number, pageSize: number): AppThunk => dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setUsersCurrentPage(page));
    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
}


export const unfollow = (userId: number): AppThunk => dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    followUnfollowAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
}


export const follow = (userId: number): AppThunk => dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    followUnfollowAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
}


export default usersReducer;
