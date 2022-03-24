const initialState = {
   menuList: [
      { id: 1, linkName: 'Profile', linkPath: '/profile' },
      { id: 2, linkName: 'Messages', linkPath: '/messages' },
      { id: 3, linkName: 'Photos', linkPath: '/photos' },
      { id: 4, linkName: 'Music', linkPath: '/music' },
      { id: 5, linkName: 'Settings', linkPath: '/settings' },
   ]
}

function asideReducer(state = initialState, action) {


   return state
}

export default asideReducer