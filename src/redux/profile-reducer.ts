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
        case 'ADD-POST': {
            let newPost: PostType = {
                id: v1(),
                post: state.newPostText,
                likesCount: 0,
            }
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState;
        }

        default:
            return state;
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostAC>

export const addPostAC = () =>
    ({type: "ADD-POST"}) as const

export const updateNewPostAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText}) as const

export default profileReducer;
