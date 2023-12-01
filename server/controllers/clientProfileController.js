const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientProfileSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },

    bio: String,
    profilePicture: String,
    website: String,
    socialLinks: {
      facebook: String,
      twitter: String,
      linkedin: String,
      instagram: String,
      youtube: String,
      // Add other social links or platforms as needed
    },

    reviews: [
      {
        userId: String, // User ID who gave the review
        rating: Number, // Rating given by the user
        comment: String, // Review comment
        createdAt: { type: Date, default: Date.now }, // Timestamp of the review
      },
    ],
    education: [
      {
        degree: String,
        institution: String,
        completedYear: Number,
      },
    ],
    availability: [
      {
        dayOfWeek: Number, // 0: Sunday, 1: Monday, ..., 6: Saturday
        startTime: String, // Format: 'HH:mm' (e.g., '09:00' for 9 AM)
        endTime: String,
      },
      // Add more availability slots or days as needed
    ],

    memberships: [
      {
        organization: String,
        membershipId: String,
        expirationDate: Date,
      },
      // Add more memberships or associations as needed
    ],

    // Payment details or methods accepted
    paymentMethods: [String],

    // Flag to indicate if the instructor is currently available or not
    isActive: {
      type: Boolean,
      default: true,
    },

    // Flag to indicate if the instructor's account is verified
    isVerified: {
      type: Boolean,
      default: false,
    },

    // Date when the instructor's account was verified
    verifiedAt: Date,

    // Other fields relevant to the instructor's profile

    posts: [
      {
        postId: {
          type: Schema.Types.ObjectId,
          ref: "Post",
        },
        content: String,
        likes: [
          {
            userId: {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          },
        ],
        comments: [
          {
            userId: {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
            comment: String,
            createdAt: { type: Date, default: Date.now },
          },
        ],
        createdAt: { type: Date, default: Date.now },
      },
    ],

    followers: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    following: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    savedPosts: [
      {
        postId: {
          type: Schema.Types.ObjectId,
          ref: "Post",
        },
      },
    ],
    servicesBought: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        serviceName: String,
        purchaseDate: { type: Date, default: Date.now },
        // Add more fields related to the purchased service if needed
      },
    ],
  },
  { timestamps: true }
);

const clientProfile = mongoose.model("clientProfile", clientProfileSchema);

module.exports = clientProfile;
