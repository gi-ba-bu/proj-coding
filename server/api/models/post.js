const db = require ('../dbConfig')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.main = data.main
        this.username = data.username
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(d => new Post(d))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

     static create(title, main, username){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, main, username) VALUES ($1, $2, $3) RETURNING *;`, [ title, main, username ]);
                let newPost = new Post(postData.rows[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating post');
            }
        });
    }

  

}

module.exports = Post;
