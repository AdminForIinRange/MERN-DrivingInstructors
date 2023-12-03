const ServiceProvider = require('../models/serviceProviderModel');
const mongoose = require('mongoose');

// GET ----------------------------------------------------------------

const getServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find({});
    res.status(200).json(serviceProviders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET :/ID ----------------------------------------------------------------


const getServiceProvider = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID' });
  }

  try {
    const serviceProvider = await ServiceProvider.findById(id);

    if (!serviceProvider) {
      return res.status(404).json({ error: 'Service Provider not found' });
    }

    res.status(200).json(serviceProvider);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST ----------------------------------------------------------------

const postServiceProvider = async (req, res) => {
  const {
    userId,
    username,
    fullName,
    email,
    password,
    phoneNumber,
    address: { street, city, state, zipCode }, // Destructuring nested address object
    drivingLicenseNumber,
    vehicleDetails: { make, model, year, color, licensePlate, vin }, // Destructuring nested vehicleDetails object
    bio,
    profilePicture,
    website,
    socialLinks: { facebook, twitter, linkedin, instagram, youtube }, // Destructuring nested socialLinks object
    availableServices,
    experienceYears,
    hourlyRate,
    languagesSpoken,
    certifications,
    reviews, 
    education, 
    availability, 
    specializations,
    memberships, 
    paymentMethods, 
    isActive,
    isVerified,
    verifiedAt,
    posts, 
    followers, 
    following, 
    savedPosts, 
    servicesOffered: serviceOfferedData // Destructuring servicesOffered and renaming it to serviceOfferedData
  } = req.body;
  

  try {



    // Create a new serviceProvider
    const serviceProvider = await ServiceProvider.create({
      userId,
  username,
  fullName,
  email,
  password,
  phoneNumber,
  address: { street, city, state, zipCode }, // Destructuring nested address object
  drivingLicenseNumber,
  vehicleDetails: { make, model, year, color, licensePlate, vin }, // Destructuring nested vehicleDetails object
  bio,
  profilePicture,
  website,
  socialLinks: { facebook, twitter, linkedin, instagram, youtube }, // Destructuring nested socialLinks object
  availableServices,
  experienceYears,
  hourlyRate,
  languagesSpoken,
  certifications,
  reviews, 
  education, 
  availability, 
  specializations,
  memberships, 
  paymentMethods, 
  isActive,
  isVerified,
  verifiedAt,
  posts, 
  followers, 
  following, 
  savedPosts, 
  servicesOffered: serviceOfferedData // Destructuring servicesOffered and renaming it to serviceOfferedData
    });

    res.status(201).json(serviceProvider); // Return a 201 status for successful creation
  } catch (error) {
    // Handle errors and provide appropriate responses
    res.status(400).json({ error: error.message });
  }
};


// DELETE :ID ----------------------------------------------------------------

const deleteServiceProvider = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const serviceProvider = await ServiceProvider.findOneAndDelete({_id: id})

  if(!serviceProvider) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(serviceProvider)



}

// PATCH :ID ----------------------------------------------------------------

const patchServiceProvider = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const serviceProvider = await ServiceProvider.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if(!serviceProvider) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(serviceProvider)




}


module.exports = {
  getServiceProviders,
  getServiceProvider,
  postServiceProvider,
  deleteServiceProvider,
  patchServiceProvider
  
};
