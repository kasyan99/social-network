import axios from "axios"
import { ProfileType } from "../types/types"


export const instance = axios.create({
   baseURL: 'http://localhost:3000/'
})

export type GetItemsType = {
   users: Array<ProfileType>
   totalCount: string
}