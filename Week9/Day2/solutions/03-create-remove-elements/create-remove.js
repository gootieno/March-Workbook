/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        // console.log(url)
        const breed = url.split('/')[4];
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const figure = document.createElement('figure');
        const li = document.createElement('li');

        img.src = url;
        figcaption.innerText = breed;
        figure.append(img, figcaption);
        li.appendChild(figure);

        const gallery = document.querySelector('ul');

        gallery.append(li);

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector('li');

    if (firstDog) {
        firstDog.remove();
    } else {
        console.log('no dogs')
    }

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const allDogs = document.querySelectorAll('li');

    let lastDog = allDogs[allDogs.length - 1];

    if (lastDog) {
        lastDog.remove();
    } else {
        console.log('no last dog')
    }

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
