const ClientProfile = require('../models/clientProfileModel');
const mongoose = require('mongoose');

// GET ----------------------------------------------------------------

const getClientProfiles = async (req, res) => {
  try {
    const clientProfiles = await ClientProfile.find({});
    res.status(200).json(clientProfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET :/ID ----------------------------------------------------------------

const getClientProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID' });
  }

  try {
    const clientProfile = await ClientProfile.findById(id);

    if (!clientProfile) {
      return res.status(404).json({ error: 'Client Profile not found' });
    }

    res.status(200).json(clientProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST ----------------------------------------------------------------
const postClientProfile = async (req, res) => {
  const {
    userId,
    username,
    fullName,
    email,
    password,
    phoneNumber,
    address: { street, city, state, zipCode }, // Destructuring nested address object
    bio,
    profilePicture,
    socialLinks: { facebook, twitter, linkedin, instagram, youtube }, // Destructuring nested socialLinks object
    languagesSpoken,
    reviews, 
    education, 
    memberships, 
    paymentMethods, 
    isActive,
    isVerified,
    verifiedAt,
    followers, 
    following, 
    savedPosts, 
  } = req.body;

  try {
    const clientProfile = await ClientProfile.create({
      userId,
      username,
      fullName,
      email,
      password,
      phoneNumber,
      address: { street, city, state, zipCode }, // Reconstructing nested address object
      bio,
      profilePicture,
      socialLinks: { facebook, twitter, linkedin, instagram, youtube }, // Reconstructing nested socialLinks object
      languagesSpoken,
      reviews,
      education,
      memberships,
      paymentMethods,
      isActive,
      isVerified,
      verifiedAt,
      followers,
      following,
      savedPosts,
    });

    res.status(200).json(clientProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// DELETE :ID ----------------------------------------------------------------


const deleteClientProfile = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  
  }

  const clientProfile = await ClientProfile.findOneAndDelete({_id: id})

  if (!clientProfile) {
    return res.status(400).json({error: 'No such client profile'})
  }

  res.status(200).json(clientProfile)




}



// PATCH :ID ----------------------------------------------------------------


const patchClientProfile = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  
  }

  const clientProfile = await ClientProfile.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!clientProfile) {
    return res.status(400).json({error: 'No such client profile'})
  }

  res.status(200).json(clientProfile)





}



module.exports = {
  getClientProfile,
  getClientProfiles,
  postClientProfile,
  deleteClientProfile,
  patchClientProfile,
};
