/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
// const getPost = () => {
//   fetch("/posts")
//     .then((res) => res.json())
//     .then((responseData) => console.log(responseData));
// };

const getPost = async () => {
  const response = await fetch("/posts");
  const responseData = await response.json();
  console.log("response data ", responseData);
};

getPost();

const createPost = async () => {
  const response = await fetch("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "New Post!",
    }),
  });

  const responseData = await response.json();
  console.log("response data ", responseData);
};

createPost();

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
