type MenuItem = {
   id: number
   linkName: string
   linkPath: string
}

const initialState = {
   menuList: [
      { id: 1, linkName: 'Profile', linkPath: '/profile' },
      { id: 2, linkName: 'Messages', linkPath: '/messages' },
      { id: 3, linkName: 'Users', linkPath: '/users' },
      { id: 4, linkName: 'Music', linkPath: '/music' },
      { id: 5, linkName: 'Settings', linkPath: '/settings' },
   ] as Array<MenuItem>
}

type InitialStateType = typeof initialState

function asideReducer(state = initialState, action: any): InitialStateType {


   return state
}

export default asideReducer