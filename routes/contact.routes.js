const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContacts,
} = require("../controllers/contact.controllers");

router.route("/").get(getAllContacts).post(createContacts);

router.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts);

module.exports = router;
