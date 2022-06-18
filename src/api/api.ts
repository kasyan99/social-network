import axios from "axios"
import { ProfileType } from "../types/types"


const instance = axios.create({
   baseURL: 'http://localhost:3000/'
})


export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 4) {
      return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`)
         .then(response => {
            return {
               users: response.data,
               totalCount: response.headers['x-total-count']
            }
         })

   },
   unfollow(id: number) {
      return instance.patch(`users/${id}`, {
         followed: false
      })
   },
   follow(id: number) {
      return instance.patch(`users/${id}`, {
         followed: true
      })
   },
   getProfileInfo(userId: number) {
      // return instance.get(`users?id=${userId}`).then(response => response.data[0])
      console.warn(`You should use "profileAPI"`)
      return profileAPI.getProfileInfo(userId)
   }
}

export const profileAPI = {
   getProfileInfo(userId: number) {
      return instance.get(`users?id=${userId}`).then(response => response.data[0])
   },
   getStatus(userId: number) {
      return instance.get(`users?id=${userId}`).then(response => response.data[0].status)
   },
   updateStatus(status: string) {
      return authAPI.me()
         .then((response) => response.data.me.id)
         .then((userId) => {
            return instance.patch(`users/${userId}`, {
               status: status
            })
         })

   },
   updateProfileData(profile: ProfileType) {
      return authAPI.me()
         .then((response) => response.data.me.id)
         .then((userId) => {
            return instance.patch(`users/${userId}`, {
               fullName: profile.fullName,
               age: profile.age,
               location: profile.location,
               contacts: profile.contacts
            })
         })
   },
   setAvatar(avatar: any) {
      return authAPI.me()
         .then((response) => response.data.me.id)
         .then((userId) => {

            return instance.patch(`users/${userId}`, {
               avatar: avatar
               // avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg'

            })
            // const formData = new FormData();
            // formData.append("avatar", avatar);
            // return instance.patch(`users/${userId}`, formData, {
            //    headers: {
            //       'Content-Type': 'multipart/form-data'
            //    }
            // })


         })
   }
}

type MeResponseType = {
   isAuth: boolean
   me: { id: number, login: string, email: string }
}

export const authAPI = {
   me() {
      return instance.get<MeResponseType>(`authMe`)
   },
   checkLogin(email: string, password: string, rememberMe = false) {
      return instance.get(`auth?email=${email}&password=${password}`)
   },
   login(id: number, login: string, email: string) {
      return instance.patch<MeResponseType>('authMe', {
         isAuth: true,
         me: { id, login, email }
      })
   },
   logout() {
      return instance.patch('authMe', {
         isAuth: false,
         me: {
            id: null,
            login: null,
            email: null
         }
      })
   }
}