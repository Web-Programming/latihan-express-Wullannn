const Mahasiswa = require('../models/mahasiswa');

exports.index = async (req, res) => {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
};

exports.insert = async (req, res) => {
    const newMahasiswa = new Mahasiswa(req.body);
    await newMahasiswa.save();
    res.status(201).json(newMahasiswa);
};

exports.update = async (req, res) => {
    const updatedMahasiswa = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMahasiswa);
};

exports.show = async (req, res) => {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    res.json(mahasiswa);
};

exports.destroy = async (req, res) => {
    await Mahasiswa.findByIdAndDelete(req.params.id);
    res.status(204).send();
};
