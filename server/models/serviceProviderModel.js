const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceProviderSchema = new Schema(
  {
    // Personal Information
    userId: {
      type: Number,
     
    },
    username: {
      type: String,
     
    },
    fullName: {
      type: String,
     
    },
    email: {
      type: String,
     
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
     
    },
    phoneNumber: {
      type: String,
     
    },

    // Address
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },

    // Driver's License
    drivingLicenseNumber: {
      type: String,
     
      unique: true,
    },

    // Vehicle Details
    vehicleDetails: {
      make: String,
      model: String,
      year: Number,
      color: String,
      licensePlate: String,
      vin: String,
    },

    // Profile Details
    bio: String,
    profilePicture: String,
    website: String,

    // Social Links
    socialLinks: {
      facebook: String,
      twitter: String,
      linkedin: String,
      instagram: String,
      youtube: String,
    },

    // Services Offered
    availableServices: [String],
    experienceYears: Number,
    hourlyRate: Number,
    languagesSpoken: [String],
    certifications: [String],

    // Reviews
    reviews: [
      {
        userId: String,
        rating: Number,
        comment: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],

    // Education
    education: [
      {
        degree: String,
        institution: String,
        completedYear: Number,
      },
    ],

    // Availability
    availability: [
      {
        dayOfWeek: Number,
        startTime: String,
        endTime: String,
      },
    ],

    // Specializations
    specializations: [String],

    // Memberships
    memberships: [
      {
        organization: String,
        membershipId: String,
        expirationDate: Date,
      },
    ],

    // Payment Methods
    paymentMethods: [String],

    // Account Status
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedAt: Date,

    // Posts
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

    // Followers/Following
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

    // Saved Posts
    savedPosts: [
      {
        postId: {
          type: Schema.Types.ObjectId,
          ref: "Post",
        },
      },
    ],

    
    servicesOffered: [
      {
        serviceName: String,
        description: String,
        price: Number,
        duration: String, // Duration of the service (e.g., '1 hour', '30 minutes')
      },
    ],
  },
  { timestamps: true }
);

const serviceProvider = mongoose.model(
  "serviceProvider",
  serviceProviderSchema
);

module.exports = serviceProvider;
