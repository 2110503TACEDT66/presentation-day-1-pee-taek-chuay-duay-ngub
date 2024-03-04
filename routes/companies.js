const express = require("express");
const { protect, authorize } = require("../middleware/auth");
const { getCompanies, createCompany, getCompany, updateCompany, deleteCompany } = require("../controllers/companies");

const router = express.Router();

router.route("/").get(getCompanies).post(protect, authorize("admin"), createCompany);
router.route("/:id").get(getCompany).put(protect, authorize("admin"), updateCompany).delete(protect, authorize("admin"), deleteCompany);

module.exports = router;
