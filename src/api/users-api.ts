import { ProfileType } from "../types/types"
import { instance } from "./api"
import { profileAPI } from "./profile-api"

export const usersAPI = {
   async getUsers(currentPage = 1, pageSize = 4) {
      const response = await instance.get<Array<ProfileType>>(`users?_page=${currentPage}&_limit=${pageSize}`)

      return {
         users: response.data,
         totalCount: response.headers['x-total-count']
      }

   },
   unfollow(id: number) {
      return instance.patch<ProfileType>(`users/${id}`, {
         followed: false
      })
   },
   follow(id: number) {
      return instance.patch<ProfileType>(`users/${id}`, {
         followed: true
      })
   },
   getProfileInfo(userId: number) {
      // return instance.get(`users?id=${userId}`).then(response => response.data[0])
      console.warn(`You should use "profileAPI"`)
      return profileAPI.getProfileInfo(userId)
   }
}