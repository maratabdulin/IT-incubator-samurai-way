import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '1b7c8d5d-e33c-4aca-b5b4-dfb2c192c1b7'
        }
    }
)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
            .then(response => response.data)
    }
}

export const followUnfollowAPI = {
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
}

export const follow = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true})
        .then(response => response.data)
}
