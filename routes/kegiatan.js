const express = require('express');
const router = express.Router();
const { createKegiatan, deleteKegiatan, updateKegiatan } = require("../controllers/kegiatanController")
const { isAuthenticated, isAdmin } = require("../middleware/auth");


router.post('/Kegiatan/create', isAuthenticated, isAdmin, createKegiatan);
router.get("/AllKegiatan", deleteKegiatan);
router.delete('/Kegiatan/delete/:id', isAuthenticated, isAdmin, deleteKegiatan);
router.put('/Kegiatan/update/:id', isAuthenticated, isAdmin, updateKegiatan);




module.exports = router;