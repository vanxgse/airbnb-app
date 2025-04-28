const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    _id: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    last_scraped: Date,
    calendar_last_scraped: Date,
    first_review: Date,
    last_review: Date,
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    bathrooms: Number,
    amenities: [String],
    price: Number,
    security_deposit: Number,
    cleaning_fee: Number,
    extra_people: Number,
    guests_included: Number,

    images: {
        thumbnail_url: String,
        medium_url: String,
        picture_url: String,
        xl_picture_url: String,
    },
    
    host: {
        host_id: String,
        host_url: String,
        host_name: String,
        host_location: String,
        host_about: String,
        host_response_time: String,
        host_thumbnail_url: String,
        host_picture_url: String,
        host_neighbourhood: String,
        host_response_rate: Number,
        host_is_superhost: Boolean,
        host_has_profile_pic: Boolean,
        host_identity_verified: Boolean,
        host_listings_count: Number,
        host_total_listings_count: Number,
        host_verifications: [String],
    },

    address: {
        street: String,
        suburb: String,
        government_area: String,
        market: String,
        country: String,
        country_code: String,
        location: {
            type: {
                type: String, // "Point"
                enum: ['Point'],
                required: true,
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true,
            },
            is_location_exact: Boolean
        }
    },

    availability: {
        availability_30: Number,
        availability_60: Number,
        availability_90: Number,
        availability_365: Number,
    },

    review_scores: {
        review_scores_accuracy: Number,
        review_scores_cleanliness: Number,
        review_scores_checkin: Number,
        review_scores_communication: Number,
        review_scores_location: Number,
        review_scores_value: Number,
        review_scores_rating: Number,
    },

    reviews: [
        {
          _id: String,
          date: Date,
          listing_id: String,
          reviewer_id: String,
          reviewer_name: String,
          comments: String
        }
      ]
});

// Export model
module.exports = mongoose.model("Listing", ListingSchema);