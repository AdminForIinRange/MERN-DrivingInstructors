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


    ServiceHeader: String,
      

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


    templatePost: String,

    
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
      
        image: String,
        Caption: String,
        likes: [
          {
            userId: String, // Storing user ID directly as a string
          },
        ],
        likesCount: {
          type: Number,
          default: 0, // Initial count of likes set to zero
        },
        comments: [
          {
            userId: String, // Storing user ID directly as a string
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
