/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

// const getProducts = async () => {
  const response = await fetch("/products");
  console.log("response ", response);
  console.log("response status ", response.status);
  console.log("response ok ", response.ok);
  console.log("response headers ", response.headers.get("Content-Type"));
  const responseData = await response.text()
  console.log("response text ", responseData);
// };

// getProducts();

const getProducts = () => {
  fetch("/products")
    .then((response) => {
      console.log("response ", response);
      console.log("response status ", response.status);
      console.log("response ok ", response.ok);
      console.log("response headers ", response.headers.get("Content-Type"));
      return response.text();
    })
    .then((responseData) => console.log("response data ", responseData));
};

getProducts();

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

/* =================== 3. Print the Content-Type Header =================== */

// Your code here

/* ============== 4. Print the body of the response as text =============== */

// Your code here
