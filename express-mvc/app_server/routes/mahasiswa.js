const express = require('express');
const router = express.Router();
const mhsController = require('../controllers/mahasiswa');
// const mahasiswaRoutes = require('./routes/mahasiswa');

router.get("/", mhsController.index); // List Mahasiswa
router.post("/insert", mhsController.insert); // Insert Mahasiswa
router.patch("/update/:id", mhsController.update); // Update Mahasiswa
router.get("/show/:id", mhsController.show); // Show detail Mahasiswa by ID
router.delete("/delete/:id", mhsController.destroy); // Delete Mahasiswa by ID

module.exports = router;
