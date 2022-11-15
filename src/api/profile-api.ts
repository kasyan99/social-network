import { instance } from "./api"
import { authAPI } from "./auth-api"
import { ProfileType } from "../types/types"

export const profileAPI = {
  async getProfileInfo(userId: string) {
    const response = await instance.get<ProfileType>(`users/find?_id=${userId}`)

    return response.data
  },
  async getStatus(userId: string) {
    const response = await instance.get<ProfileType>(`users/find?_id=${userId}`)

    return response.data.status
  },
  async updateStatus(status: string) {
    const response = await authAPI.me()
    const userId = response.data.me.id

    return await instance.patch(`users?_id=${userId}`, {
      status,
    })
  },
  async updateProfileData(profile: ProfileType) {
    const response = await authAPI.me()
    const userId = response.data.me.id

    return await instance.patch<Array<ProfileType>>(`users?_id=${userId}`, {
      fullName: profile.fullName,
      age: profile.age,
      location: profile.location,
      contacts: profile.contacts,
    })
  },
}
