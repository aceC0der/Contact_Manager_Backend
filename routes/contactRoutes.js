const express = require("express");
const router = express.Router();
const {getContacts, getContact, createContact, updateContact, delContact} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(delContact);

module.exports = router;