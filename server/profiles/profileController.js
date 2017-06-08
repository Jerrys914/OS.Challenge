const ProfileModel = require('./profileModel.js');

const filterProfiles = (arr) => {
  return arr.map(profile => {
    return {
      id: profile.id,
      basicInfo: {
        name: profile.name,
        dob: profile.dateOfBirth,
        gender: profile.gender,
        nationality: profile.nationality,
        sport: profile.sport
      },
      about: {
        description: profile.description,
        location: profile.location,
        association: profile.association,
        team: profile.team,
        interests: profile.interests,
        charities: profile.charities,
        married: profile.married,
        drink: profile.drink
      }
    };
  });
};
module.exports = {
  createNewProfile(req, res) {
    console.log('REQ>BODY CREATE NEW: ', req.body)
    let newProfile = new ProfileModel({
      name: req.body.basicInfo.name,
      dateOfBirth: req.body.basicInfo.dob,
      gender: req.body.basicInfo.gender,
      nationality: req.body.basicInfo.nationality,
      sport: req.body.basicInfo.sport,
      description: req.body.about.description,
      location: req.body.about.location,
      association: req.body.about.association,
      team: req.body.about.team,
      interests: req.body.about.interests,
      charities: req.body.about.charities,
      married: req.body.about.married,
      drink: req.body.about.drink
    });
    newProfile.save((err, profile) => {
      if(err) {
        res.status(500).send(err);
      }
      console.log('Profile Created: ', profile);
      res.end();
    })
  },
  getAllProfiles(req, res){
    console.log('Get All Profiles')
    ProfileModel.find({}).then(profiles => {
      console.log('PROFILES FROM DB: ', filterProfiles(profiles));
      res.send(filterProfiles(profiles))
    }) 
  },
  update(req, res){
    console.log('UPDATE: ', req.body)
    ProfileModel.update({_id:req.body.id}, {
      name: req.body.basicInfo.name,
      dateOfBirth: req.body.basicInfo.dob,
      gender: req.body.basicInfo.gender,
      nationality: req.body.basicInfo.nationality,
      sport: req.body.basicInfo.sport,
      description: req.body.about.description,
      location: req.body.about.location,
      association: req.body.about.association,
      team: req.body.about.team,
      interests: req.body.about.interests,
      charities: req.body.about.charities,
      married: req.body.about.married,
      drink: req.body.about.drink
    }).then(profile => {
      console.log('FIND PROFILE: ', profile)

    })
    res.end()
  }
}
