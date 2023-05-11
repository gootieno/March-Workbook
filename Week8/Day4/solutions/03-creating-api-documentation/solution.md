- Get all the posts
  GET /posts

- Create a new post
  POST /posts

- Edit a post
  PUT/PATCH /posts/:postId

- Create a new user
  POST /users

- Get the comments for a post
  GET /posts/:postId/comments

- Create a comment for a post
  POST /posts/:postId/comments

- Edit a comment for a post
  PUT/PATCH /comments/:commentId
  PUT/PATCH /posts/:postId/comments/:commentId

- Delete a comment for a post
  DELETE /comments/:commentId
  DELETE /posts/:postId/comments/:commentId

- Add a like for a post
  POST /posts/:postId/likes

- Remove a like for a post
  DELETE /posts/:postId/likes/:likeId

- Get all the posts of a user
  GET /users/:userId/posts

- Submit a search on posts
  GET /search/posts
  POST /search/posts