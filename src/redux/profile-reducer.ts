import {ActionsTypes, PostType, ProfilePageType} from "./state";
import {v1} from "uuid";

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

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
