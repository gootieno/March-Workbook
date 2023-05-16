const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    console.log(document.getElementsByClassName('seed'));
    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.querySelectorAll('li.seedless');
    seedless.forEach(ele => {
        console.log(ele.innerText)
    })
    // 3. Get first seedless fruit element
    // Your code here
    console.log(seedless[0]);
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const innerSpan = document.getElementById('wrapper');
    console.log(innerSpan.childNodes[1].childNodes[1]);
    // 5. Get all children of element "wrapper"
    // Your code here
    const allWrapper = document.querySelector('#wrapper').children;
    console.log(allWrapper);
    // 6. Get all odd number list items in the list
    // Your code here
    const odds = document.querySelectorAll('.odd');
    console.log('Odds =>', odds);
    // 7. Get all even number list items in the list
    // Your code here
    const evens = document.querySelectorAll('ol > li:not(.odd)');
    console.log(evens);
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    console.log(document.querySelectorAll('a:not([class])'))
    console.log(document.querySelector('a'));
    // 9. Get "Amazon" list element
    // Your code here
    console.log(document.getElementsByClassName('shopping'));
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let arr = [...document.getElementsByTagName('li')].filter(ele => {
        if (ele.children.length) {
            return ele.children[0].className === 'unicorn'
        }
        return false;
    })
    console.log(arr);
}

window.onload = select;
