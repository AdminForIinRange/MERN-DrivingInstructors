const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientProfileSchema = new Schema(
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
      
    
        // Vehicle Details
    
    
        // Profile Details
        bio: String,
        profilePicture: String,

    
        // Social Links
        socialLinks: {
          facebook: String,
          twitter: String,
          linkedin: String,
          instagram: String,
          youtube: String,
        },
    
        // Services Offered
  
        languagesSpoken: [String],

    
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
    
       
    
        // Specializations
       
    
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
    
        
        
      },
      { timestamps: true }
);

const clientProfile = mongoose.model("clientProfile", clientProfileSchema);

module.exports = clientProfile;
