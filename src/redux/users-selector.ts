import {AppStateType} from './redux-store';
import {UserType} from './users-reducer';

export const getUserSelector = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}
export const getPageSizeSelector = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const getTotalUserCountSelector = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state: AppStateType): number => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state: AppStateType): number[] => {
    return state.usersPage.followingInProgress
}

