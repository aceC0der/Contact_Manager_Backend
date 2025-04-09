// if a error is thrown in a async function
// it passes the error in the next middlewire
const asyncHandler = require("express-async-handler");                          
const Contacts = require("../models/contactModel");


//@desc - get all contacts
//@routes - get /api/contacts
//@access - public
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contacts.find();
    res.status(200).json(contact);
});

//@desc - get a contact
//@routes - get /api/contacts
//@access - public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}` });
});

//@desc - create contact
//@routes - POST /api/contacts
//@access - public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is : \n", req.body);
    const { name, email, phone } = req.body;
    console.log(name, email, phone);
    if (!name || !email || !phone) {
        res.status(404);
        throw new Error("All fields are mandatory !!!");
    }
    // console.log("*****");
    try {
        const contact = await Contacts.create({name, email, phone});
        res.status(201).json(contact);
    } catch(err) {
        console.log(err);
        res.status(500);
        throw new Error("Server Crashed!!!!!!!!!!!");
    }
});

//@desc - update contact
//@routes - PUT /api/contacts/:id
//@access - public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` });
});

//@desc - delete contacts
//@routes - DELETE /api/contacts/:id
//@access - public
const delContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    delContact
};
