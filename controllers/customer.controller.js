const dataBase = require("../db");

class CustomerController {
    async createCustomer(req, res) {
        const { first_name, last_name } = req.body;
        const newCustomer = await dataBase.query(
            `INSERT INTO customer (first_name, last_name) values ($1, $2) RETURNING *`, [first_name, last_name]
        );
        res.json(newCustomer.rows[0]);
    }

    async getCustomers(req, res) {
        const customers = await dataBase.query(`SELECT * FROM customer`);
        res.json(customers.rows);
    }
    async getOneCustomer(req, res) {
        const id = req.params.customerID;
        const customer = await dataBase.query(`SELECT * FROM customer where id=$1`, [id]);
        res.json(customer.rows[0])
    }

    async updateOneCustomer(req, res) {
        const { id, first_name, last_name } = req.body;
        const updatedCustomer = await dataBase.query(`UPDATE customer set first_name=$1, last_name=$2 where id=$3 RETURNING *`, [first_name, last_name, id]);
        res.json(updatedCustomer.rows[0])
    }

    async deleteCustomer(req, res) {
        const id = req.params.customerID;
        const deletedCustomer = await dataBase.query(`DELETE FROM customer where id=$1`, [id]);
        res.json(deletedCustomer.rows[0])
    }

    async editCustomerID(req, res) {
        const { prevID, newID } = req.body;
        const updatedCustomer = await dataBase.query(`UPDATE customer set id=$1 where id=$2 RETURNING *`, [newID, prevID]);
        res.json(updatedCustomer)
    }
}

module.exports = new CustomerController();