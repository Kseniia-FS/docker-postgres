const Router = require("express");
const CustomerController = require("../controllers/customer.controller");

const router = new Router();

router.post("/customer", CustomerController.createCustomer);
router.get("/customers", CustomerController.getCustomers);
router.get("/customer/:customerID", CustomerController.getOneCustomer);
router.put("/customer", CustomerController.updateOneCustomer);
router.delete("/customer/:customerID", CustomerController.deleteCustomer);
router.put("/change-customer", CustomerController.editCustomerID);


module.exports = router;