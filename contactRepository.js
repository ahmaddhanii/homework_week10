// repositories/contactRepository.js
class ContactRepository {
    constructor(model) {
      this.model = model;
    }
  
    getAllContacts() {
      return this.model.getAllContacts();
    }
  
    addContact(contact) {
      this.model.addContact(contact);
    }
  
    updateContact(index, contact) {
      this.model.updateContact(index, contact);
    }
  
    deleteContact(index) {
      this.model.deleteContact(index);
    }
  
    getContact(index) {
      return this.model.getContact(index);
    }
  
    setContactPhoto(index, photoPath) {
      this.model.setContactPhoto(index, photoPath);
    }
  }
  
  module.exports = ContactRepository;
  