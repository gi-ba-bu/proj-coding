// ********************************API***********************************
// const { post } = require("../server/api/controllers/posts");
const port = 3000;

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

// // create 
// async function sendPost(e) {
//     e.preventDefault();
//     try {
//         const options = {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
//         }

//         const resp = await fetch(`http://localhost:${port}/posts/`, options);
//         const data = await resp.json();
//         window.location.hash = `#${data}`
//     } catch (err) {
//         console.log(err)
//     }
// }

// **********************************************************************
// ******************************LAYOUT**********************************

const btn = document.getElementById('new-post-form')

btn.addEventListener('submit', submitPost)

async function submitPost(e){
    e.preventDefault();
    const postData = {
        username: e.target.username.value,
        title: e.target.title.value,
        main: e.target.main.value
        }

        
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData)
        }
        
        console.log(options.body)
        
    fetch(`http://localhost:${port}/posts/`, options)
        .then(r => r.json())
        .then(d => console.log(d));



}
