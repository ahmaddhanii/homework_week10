const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const ContactModel = require('./models/contact');
const ContactView = require('./views/contactView');
const ContactController = require('./controllers/contactController');

const model = new ContactModel();
const repository = new ContactRepository(model);
const view = new ContactView();
const controller = new ContactController(repository, view);

// ... (Bagian lain dari kode Anda)

app.get('/contact', function (req, res) {
  const contacts = controller.getAllContacts();
  res.send(contacts);
});

app.post('/contact', function (req, res) {
  const newContact = { name: req.body.name, phone: req.body.phone };
  controller.addContact(newContact);
  res.send({ success: true });
});

// Implementasikan rute dan pengontrol lain sesuai kebutuhan.

app.put(
  '/contact/upload',
  multer({ storage: diskStorage }).single('photo'),
  (req, res) => {
    const file = req.file.path;
    if (!file) {
      res.status(400).send({
        status: false,
        data: 'Tidak ada berkas yang dipilih.',
      });
    }
    // Tentukan indeks kontak dan perbarui foto.
    const index = req.query.index;
    controller.setContactPhoto(index, file);
    res.send(file);
  }
);
