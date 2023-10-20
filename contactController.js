// controllers/contactController.js
class ContactController {
    constructor(repository, view) {
      this.repository = repository;
      this.view = view;
    }
  
    getAllContacts() {
      const contacts = this.repository.getAllContacts();
      this.view.renderContacts(contacts);
    }
  
    addContact(contact) {
      this.repository.addContact(contact);
    }
  
    updateContact(index, contact) {
      this.repository.updateContact(index, contact);
    }
  
    deleteContact(index) {
      this.repository.deleteContact(index);
    }
  
    getContact(index) {
      return this.repository.getContact(index);
    }
  
    setContactPhoto(index, photoPath) {
      this.repository.setContactPhoto(index, photoPath);
    }
  }
  
  module.exports = ContactController;
  