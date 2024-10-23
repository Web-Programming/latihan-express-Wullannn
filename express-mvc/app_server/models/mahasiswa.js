let mongoose = require("mongoose");
//https://mongoosejs.com/docs/schematypes.html
//Create Collection Schema
let schemamhs = new mongoose.Schema({
  nama: String,
  npm: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  tanggal_lahir: {
    type: Date,
  },
  aktif: Boolean,
});

//create Model from Schema
mongoose.model("mahasiswa", schemamhs);