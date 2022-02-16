// ********************************API***********************************
// const port = require("../server/api/server"); // there seem to be no port variable in the specified path/file
 
let port = 3000;

// no index 

// show 
async function getPost(id) {
    try {
        const resp = await fetch(`http://localhost:${port}/posts/${id}`)
        const data = await resp.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

// create 
async function sendPost(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const resp = await fetch(`http://localhost:${port}/posts/`, options);
        const data = await resp.json();
        window.location.hash = `#${data}`
    } catch (err) {
        console.log(err)
    }
}

// **********************************************************************
// ******************************LAYOUT**********************************

// Event listener
const content = document.getElementById("content");

function updateContent() {
    content.innerHTML = ''
}
