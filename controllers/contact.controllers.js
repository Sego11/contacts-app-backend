const asyncHandler = require("express-async-handler");

//@description Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

//@description create contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }
  res.status(201).json({ message: "create new contact" });
});

//@description Get a particular contacts
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

//@description update contact
//@route PUT /api/contacts/:id
//@access public
const updateContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

//@description delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  updateContacts,
  deleteContacts,
  getContact,
  createContacts: createContact,
};
