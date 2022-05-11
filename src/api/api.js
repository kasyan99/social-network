import axios from "axios"


const instance = axios.create({
   baseURL: 'http://localhost:3000/'
})


export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 4) {
      return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`)
         .then(response => {
            return {
               users: response.data,
               totalCount: response.headers['x-total-count']
            }
         })

   },
   unfollow(id) {
      return instance.patch(`users/${id}`, {
         followed: false
      })
   },
   follow(id) {
      return instance.patch(`users/${id}`, {
         followed: true
      })
   },
   getProfileInfo(userId) {
      // return instance.get(`users?id=${userId}`).then(response => response.data[0])
      console.warn(`You should use "profileAPI"`)
      return profileAPI.getProfileInfo(userId)
   }
}

export const profileAPI = {
   getProfileInfo(userId) {
      return instance.get(`users?id=${userId}`).then(response => response.data[0])
   },
   getStatus(userId) {
      return instance.get(`users?id=${userId}`).then(response => response.data[0].status)
   },
   updateStatus(status) {
      return authAPI.me()
         .then((response) => response.data.me.id)
         .then((userId) => {
            return instance.patch(`users/${userId}`, {
               status: status
            })
         })

   }
}

export const authAPI = {
   me() {
      return instance.get(`authMe`)
   },
   checkLogin(email, password, rememberMe = false) {
      return instance.get(`auth?email=${email}&password=${password}`)
   },
   login(id, login, email) {
      return instance.patch('authMe', {
         isAuth: true,
         me: { id, login, email }
      })
   },
   logout() {
      return instance.patch('authMe', {
         isAuth: false,
         me: {
            id: null,
            login: null,
            email: null
         }
      })
   }
}