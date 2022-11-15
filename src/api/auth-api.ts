import { instance } from "./api"

type MeResponseType = {
  isAuth: boolean
  me: { id: string; login: string; email: string }
}

type CheckLoginResponseType = {
  email: string
  id: string
  login: string
  password: string
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`)
  },
  checkLogin(email: string, password: string, rememberMe = false) {
    return instance.get<CheckLoginResponseType>(
      `auth?email=${email}&password=${password}`
    )
  },
  login(id: string, login: string, email: string) {
    return instance.post<MeResponseType>("auth", {
      isAuth: true,
      me: { id, login, email },
    })
  },
  logout() {
    return instance.delete<MeResponseType>("auth")
  },
}
