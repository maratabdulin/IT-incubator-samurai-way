import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export type PostType = {
    post: string
    likesCount: number
    id: string
};
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), post: 'hi how are you?', likesCount: 0},
        {id: v1(), post: 'It\' s my first post', likesCount: 23},
    ],
    newPostText: 'it-MassTransit',
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
        default:
            return state;
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostAC>

export const addPostAC = () =>
    ({type: "ADD-POST"}) as const

export const updateNewPostAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText}) as const

export default profileReducer;
