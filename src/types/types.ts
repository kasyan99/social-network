export type ProfileType = {
  _id: string

  fullName: string
  avatar: any
  status: string
  location: {
    country: string
    city: string
  }
  age: number
  contacts: {
    instagram: string
    twitter: string
    telegram: string
  }
  followed: boolean
}

export type Post = {
  id: number
  text: string
  likes: number
}
