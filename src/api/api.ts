import axios, {AxiosResponse} from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '1b7c8d5d-e33c-4aca-b5b4-dfb2c192c1b7'
        }
    }
)

type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginResponseType = {
    data: {
        userId: number
    }
    messages: any[]
    fieldsErrors: any[]
    resultCode: number
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number | null) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
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

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<'', AxiosResponse<LoginResponseType>, LoginPayloadType>(`auth/login`, {
            email,
            password,
            rememberMe
        })
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const follow = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}


