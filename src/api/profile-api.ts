import { instance } from "./api"
import { authAPI } from "./auth-api"
import { ProfileType } from "../types/types"


export const profileAPI = {
   async getProfileInfo(userId: number) {
      const response = await instance.get<ProfileType>(`users?id=${userId}`)
      return response.data[0]
   },
   async getStatus(userId: number) {
      const response = await instance.get<ProfileType>(`users?id=${userId}`)
      return response.data[0].status
   },
   async updateStatus(status: string) {
      const response = await authAPI.me()
      const userId = response.data.me.id
      return await instance.patch(`users/${userId}`, {
         status: status
      })

   },
   async updateProfileData(profile: ProfileType) {
      const response = await authAPI.me()
      const userId = response.data.me.id

      return await instance.patch<Array<ProfileType>>(`users/${userId}`, {
         fullName: profile.fullName,
         age: profile.age,
         location: profile.location,
         contacts: profile.contacts
      })
   },
   async setAvatar(avatar: any) {
      const response = await authAPI.me()
      const userId = response.data.me.id
      return await instance.patch<Array<ProfileType>>(`users/${userId}`, {
         avatar: avatar
         // avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg'
      })
   }
}
