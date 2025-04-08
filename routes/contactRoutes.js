const express = require("express");
const router = express.Router();
const {getContact, postContact, updateContact, delContact} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}` });
});

router.route("/").post(postContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(delContact);

module.exports = router;