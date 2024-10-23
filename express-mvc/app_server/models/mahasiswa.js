const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
    nama: String,
    npm: { type: String, required: true },
    email: { type: String, required: true },
    tanggal_lahir: Date,
    aktif: Boolean
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;
