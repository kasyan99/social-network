import { FilterType } from "../components/Content/Users/Users"
import { instance } from "./api"
import { profileAPI } from "./profile-api"

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 4, filter: FilterType) {
    const filterByName = `${
      filter.filterByName ? `&fullName_like=${filter.filterByName}` : ""
    }`
    const filterByFollow = `${
      filter.filterByFollow && filter.filterByFollow !== "all"
        ? `&followed=${filter.filterByFollow}`
        : ""
    }`

    const getFilter = filter ? filterByName + filterByFollow : ""

    const response = await instance.get(
      `users?_page=${currentPage}&_limit=${pageSize}` + getFilter
    )

    return {
      users: response.data.users,
      totalCount: response.data.totalCount,
    }
  },

  async unfollow(id: string) {
    const data = await instance.patch(`users?_id=${id}`, {
      followed: false,
    })
    return data
  },
  async follow(id: string) {
    const data = await instance.patch(`users?_id=${id}`, {
      followed: true,
    })
    return data
  },
  async getProfileInfo(userId: string) {
    console.warn(`You should use "profileAPI"`)
    return await profileAPI.getProfileInfo(userId)
  },
}
