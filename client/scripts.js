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


// create and show

const btn = document.getElementById('new-post-form')
const postContent1 = document.getElementById('post-content1');
const postContent2 = document.getElementById('post-content2');
const postContent3 = document.getElementById('post-content3');
const contentDiv = document.getElementById('content');
const postDiv = document.getElementById('post');
const postTtl = document.querySelector('h1');

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
        .then(d => d.id)
        .then(renderPost)
        .then(() => e.target.reset())
        .catch(console.warn)

}


async function renderPost(id) { 
    contentDiv.style.display = "none";
    postTtl.style.display = "none";
    postDiv.style.display = "block";
    const postData = await getAPost(id);
    console.log(postData);
    postContent1.textContent = `${postData.username}`;
    postContent2.textContent = `${postData.title}`;
    postContent3.textContent = `${postData.main}`;
    
}

async function getAPost(id) {
    const postData = await getPost(id)
    return postData;
}
