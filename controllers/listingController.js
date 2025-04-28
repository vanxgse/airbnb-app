// controllers/listingController.js
const Listing = require('../models/Listing');
const asyncHandler = require("express-async-handler");

// Obtener todos los listings
exports.getAllListings = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, market} = req.query;

    const filter = {};
    if (market) {
        filter["address.market"] = market;
    }

    const listings = await Listing.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

    const total = await Listing.countDocuments(filter);

    res.json({
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        listings
    });
});

// Obtener una propiedad específica por ID

exports.getListingById = asyncHandler(async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        res.status(404);
        throw new Error("Listing not found");
    }

    res.json(listing);
});
