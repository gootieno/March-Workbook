window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("comment-input");
  console.log("input ", input);
  //   const form = document.getElementById("comment-form");
  const button = document.getElementById("submit-button");
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const inputValue = input.value;

    const response = await fetch("/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ comment: inputValue }),
    });

    const data = await response.json();

    console.log("data ", data);

    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    li.innerText = data.comment;
    ul.appendChild(li);
    input.value = "";
  });
});
