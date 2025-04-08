//@desc - get all contacts
//@routes - get /api/contacts
//@access - public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc - get a contact
//@routes - get /api/contacts
//@access - public
const getContact = (req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}` });
};

//@desc - create contact
//@routes - POST /api/contacts
//@access - public
const createContact = (req, res) => {
    res.status(200).json({ message: "create contacts" });
};

//@desc - update contact
//@routes - PUT /api/contacts/:id
//@access - public
const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` });
};

//@desc - delete contacts
//@routes - DELETE /api/contacts/:id
//@access - public
const delContact = (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = { 
    getContacts,
    getContact, 
    createContact, 
    updateContact, 
    delContact
};
