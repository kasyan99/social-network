import { instanceS } from "./api"

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
    return instanceS.get<MeResponseType>(`auth/me`)
  },
  checkLogin(email: string, password: string, rememberMe = false) {
    return instanceS.get<CheckLoginResponseType>(
      `auth?email=${email}&password=${password}`
    )
  },
  login(id: string, login: string, email: string) {
    return instanceS.post<MeResponseType>("auth", {
      isAuth: true,
      me: { id, login, email },
    })
  },
  logout() {
    return instanceS.delete<MeResponseType>("auth")
  },
}
