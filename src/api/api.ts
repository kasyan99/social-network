import axios from "axios"
import { ProfileType } from "../types/types"

export type GetItemsType = {
  users: Array<ProfileType>
  totalCount: string
}

export const instance = axios.create({
  baseURL: "https://social-network-api-app.herokuapp.com/",
})
