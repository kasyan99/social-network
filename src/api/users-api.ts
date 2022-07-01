import { FilterType } from "../components/Content/Users/Users"
import { ProfileType } from "../types/types"
import { instance } from "./api"
import { profileAPI } from "./profile-api"

export const usersAPI = {
   async getUsers(currentPage = 1, pageSize = 4, filter: FilterType) {
      console.log('filterr', filter);

      const filterByName = `${filter.filterByName ? `&fullName_like=${filter.filterByName}` : ''}`
      const filterByFollow = `${filter.filterByFollow !== 'all' ? `&followed=${filter.filterByFollow}` : ''}`

      const getFilter = filter ? filterByName + filterByFollow : ''

      const response = await instance.get<Array<ProfileType>>(`users?_page=${currentPage}&_limit=${pageSize}` + getFilter)

      return {
         users: response.data,
         totalCount: response.headers['x-total-count']
      }

   },
   async getFilteredUsers(name: string) {
      const response = await instance.get<Array<ProfileType>>(`users?_page=${1}&_limit=${2}&fullName_like=${name}`)
      console.log(response.data);

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