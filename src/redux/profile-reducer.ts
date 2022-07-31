import {ActionsTypes} from './redux-store';
import {v1} from 'uuid';

export type PostType = {
    post: string
    likesCount: number
    id: string
};
type UserProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type UserProfilePhotos = {
    small: string
    large: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: UserProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UserProfilePhotos
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), post: 'hi how are you?', likesCount: 0},
        {id: v1(), post: 'It\' s my first post', likesCount: 23},
    ],
    newPostText: 'it-MassTransit',
    profile: {
        aboutMe: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        contacts: {
            facebook:'',
            github:'',
            instagram:'',
            mainLink:'',
            twitter:'',
            vk:'',
            website:'',
            youtube:''
        },
        fullName: '',
        photos: {
            large: '',
            small: ''
        },
        userId: 0
    },
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: v1(), post: state.newPostText, likesCount: 0,}],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const updateNewPostAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText}) as const
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const

export default profileReducer;
