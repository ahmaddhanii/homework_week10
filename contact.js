// models/contact.js
class ContactModel {
    constructor() {
      this.contacts = [
        {
          name: 'ahmad',
          phone: '089658834406',
          photo: null,
        },
        {
          name: 'dhani',
          phone: '081265914899',
          photo: null,
        },
      ];
    }
  
    getAllContacts() {
      return this.contacts;
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  
    updateContact(index, contact) {
      this.contacts[index] = contact;
    }
  
    deleteContact(index) {
      this.contacts.splice(index, 1);
    }
  
    getContact(index) {
      return this.contacts[index];
    }
  
    setContactPhoto(index, photoPath) {
      this.contacts[index].photo = photoPath;
    }
  }
  
  module.exports = ContactModel;
  