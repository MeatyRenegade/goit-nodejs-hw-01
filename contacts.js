const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  try {
    const contacts = await contactsPath.getAll();
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async contactId => {
  // ...твой код
};

const removeContact = async contactId => {
  // ...твой код
};

const addContact = async (name, email, phone) => {
  try {
    await fs.appendFile(name, email, phone);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
