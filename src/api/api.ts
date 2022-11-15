import axios from "axios"
import { ProfileType } from "../types/types"

export type GetItemsType = {
  users: Array<ProfileType>
  totalCount: string
}

export const instance = axios.create({
  baseURL: "http://localhost:3200/",
})
