let db = {
  users: [
    {
      userId: "sfsdgsnsnda131421ad",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-03-15T11:00:00.018Z",
      imageUrl: "image/2r23ujefjnb",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "Jakarta, Indonesia"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2019-03-15T11:00:00.018Z",
      likeCount: 5,
      commentCOunt: 2
    }
  ],
  likes: [
    {
      userHandle: "user",
      screamId: "asjdasf28323"
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "wdgjfbs7229532",
      body: "Like this so bad!",
      createdAt: "2019-03-15T11:00:00.018Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "hsdjkghskgs",
      type: "like | comment",
      createdAt: "2019-03-15T11:00:00.018Z"
    }
  ]
};

const userDetails = {
  // Redux Data
  credentials: {
    userId: "nsjfwi3284p823",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T11:00:00.018Z",
    imageUrl: "image/12312523hrehbl",
    bio: "Hello, my name is user, nice to meet you!",
    website: "https://user.com",
    location: "London, UK"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "shjfgs72346872"
    },
    {
      userHandle: "user",
      screamId: "s13fgs72346872"
    }
  ]
};
