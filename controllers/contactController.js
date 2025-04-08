//@desc - Get all contacts
//@routes - GET /api/contacts
//@access - public
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};


//@desc - Post contact
//@routes - POST /api/contacts
//@access - public
const postContact = (req, res) => {
    res.status(200).json({ message: "create contacts" });
};

//@desc - PUT contact
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

module.exports = { getContact, postContact, updateContact, delContact};