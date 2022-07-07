import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";

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
            let newPost: PostType = {
                id: v1(),
                post: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostAC>

export const addPostAC = (newPostText: string) =>
    ({type: "ADD-POST", newPostText}) as const

export const updateNewPostAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText}) as const

export default profileReducer;
