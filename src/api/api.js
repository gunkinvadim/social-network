import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '727d7a8b-28cd-456e-989f-7956b9659d91'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(res => res.data)
    },
    
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(res => res.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(res => res.data)
    },

    updatePhoto(file) {
        const formData = new FormData()
        formData.append('image', file, file.name)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },

    updateProfileData(newData) {

        
        return instance.put(`profile`, newData)
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    login(loginData) {
        return instance.post(`auth/login`, loginData)
            .then(res => res.data)
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}