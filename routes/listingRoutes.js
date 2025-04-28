const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listingController");

// GET /api/listings?page=1&limit=10&market=Lisbon
router.get('/', listingController.getAllListings);

// GET /api/listings/:id
router.get('/:id', listingController.getListingById);

module.exports = router;