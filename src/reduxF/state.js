let render = () => {
   console.log('state changed');
}

const state = {
   profile: {
      posts: [
         { id: 1, text: 'today is a first day of react', likes: 20 },
         { id: 2, text: 'weekend!!!', likes: 3 },
         { id: 3, text: 'close the sky!', likes: 65 },
         { id: 4, text: 'go to the party!', likes: 5 },
      ],
      newPostText: ''
   },
   massages: {
      contactsList: [
         { id: 1, name: 'Nikolay' },
         { id: 2, name: 'Vlad' },
         { id: 3, name: 'Dima' },
         { id: 4, name: 'Yana' },
         { id: 5, name: 'Katia' },
      ]
   },
   aside: {
      menuList: [
         { linkName: 'Profile', linkPath: '/profile' },
         { linkName: 'Messages', linkPath: '/messages' },
         { linkName: 'Photos', linkPath: '/photos' },
         { linkName: 'Music', linkPath: '/music' },
         { linkName: 'Settings', linkPath: '/settings' },
      ]
   }
}

export function updatePostText(newText) {
   state.profile.newPostText = newText
   render(state)
}

export function addPost(text) {
   const post = {
      id: 6,
      text,
      likes: 0
   }

   state.profile.posts.push(post)
   render(state)
   state.profile.newPostText = ''
}

export function subscribe(observer) {
   render = observer
}

export default state