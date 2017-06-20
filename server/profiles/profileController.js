const ProfileModel = require('./profileModel.js');

const filterProfiles = (arr) => {
  return arr.map(profile => {
    let formattedHandles = formatHandles(profile.handles);
    return {
      id: profile.id,
      basicInfo: {
        name: profile.name,
        dob: profile.dateOfBirth.toString(),
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
      },
      handles: formattedHandles
    };
  });
};
const formatHandles = (handlesObj) => {
  let arr = [];
  for(let prop in handlesObj){
    arr.push([prop, handlesObj[prop]])
  }
  return arr;
};
module.exports = {
  createNewProfile(req, res) {
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
      drink: req.body.about.drink,
      handles: req.body.handles
    });
    newProfile.save((err, profile) => {
      if(err) {
        res.status(500).send(err);
      }
      res.end();
    })
  },
  getAllProfiles(req, res){
    ProfileModel.find({}).then(profiles => {
      let filtered = filterProfiles(profiles); 
      res.send(filtered)
    }) 
  },
  update(req, res){
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
      drink: req.body.about.drink,
      handles: req.body.handles
    }).then(profile => {
      res.end()
    })
  }
}
