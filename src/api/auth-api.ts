import { instance } from "./api"

type MeResponseType = {
  isAuth: boolean
  me: { id: string; login: string; email: string }
}

type CheckLoginResponseType = {
  email: string
  id: number
  login: string
  password: string
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`authMe`)
  },
  checkLogin(email: string, password: string, rememberMe = false) {
    return instance.get<CheckLoginResponseType>(
      `auth?email=${email}&password=${password}`
    )
  },
  login(id: number, login: string, email: string) {
    return instance.patch<MeResponseType>("authMe", {
      isAuth: true,
      me: { id, login, email },
    })
  },
  logout() {
    return instance.patch<MeResponseType>("authMe", {
      isAuth: false,
      me: {
        id: null,
        login: null,
        email: null,
      },
    })
  },
}
