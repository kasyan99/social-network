import { instance, instanceS } from "./api"
import { authAPI } from "./auth-api"
import { ProfileType } from "../types/types"

export const profileAPI = {
  async getProfileInfo(userId: string) {
    //  const response = await instance.get<ProfileType>(`users?id=${userId}`)
    //  return response.data[0]
    const response = await instanceS.get<ProfileType>(
      `users/find?_id=${userId}`
    )
    // const response = await axios.get<ProfileType>(
    //   `http://localhost:3200/users/find?_id=${userId}`
    // )
    // console.log("response", response.data)

    return response.data
  },
  async getStatus(userId: string) {
    // const response = await instance.get<ProfileType>(`users?id=${userId}`)
    const response = await instanceS.get<ProfileType>(
      `users/find?_id=${userId}`
    )
    // const response = await axios.get<ProfileType>(
    //   `http://localhost:3200/users/find?_id=${userId}`
    // )
    return response.data.status
  },
  async updateStatus(status: string) {
    const response = await authAPI.me()
    const userId = response.data.me.id
    return await instance.patch(`users/${userId}`, {
      status,
    })
  },
  async updateProfileData(profile: ProfileType) {
    const response = await authAPI.me()
    const userId = response.data.me.id

    return await instance.patch<Array<ProfileType>>(`users/${userId}`, {
      fullName: profile.fullName,
      age: profile.age,
      location: profile.location,
      contacts: profile.contacts,
    })
  },
  async setAvatar(avatar: any) {
    const response = await authAPI.me()
    const userId = response.data.me.id
    return await instance.patch<Array<ProfileType>>(`users/${userId}`, {
      avatar: avatar,
      // avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg'
    })
  },
}
