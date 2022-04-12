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

   }
}

