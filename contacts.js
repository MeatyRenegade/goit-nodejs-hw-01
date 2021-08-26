const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

const updateContacts = async contacts => {
  const contactsToString = JSON.stringify(contacts);
  await fs.writeFile(contactsPath, contactsToString);
};

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const selectedContact = contacts.find(item => item.id === contactId);

    if (!selectedContact) {
      throw new Error(`Contact with id=${contactId} not found`);
    }
    return selectedContact;
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if (idx === -1) {
      throw new Error(`Contact with id=${contactId} not found`);
    }
    const newContacts = contacts.filter(item => item.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    return contacts[idx];
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
