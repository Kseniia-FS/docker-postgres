const dataBase = require("../db");

class PostController {
    async createPost(req, res) {
        const { title, content, customerID } = req.body;
        const newPost = await dataBase.query(
            `INSERT INTO post (title, content, customer_id) values ($1, $2, $3) RETURNING *`, [title, content, customerID]
        );

        res.json(newPost.rows[0])
    }
    async getPostByCustomerID(req, res) {
        const id = req.query.id;
        const post = await dataBase.query(`SELECT * FROM post where customer_id=$1`, [id]);
        res.json(post.rows)

    }

    async getPostsWithCustomers(req, res) {
        const post = await dataBase.query(`SELECT * FROM post INNER JOIN customer ON post.customer_id=customer.id`);
        res.json(post.rows)

    }
}

module.exports = new PostController();