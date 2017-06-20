angular.module('osc.services', [])
.factory('Profile', ($http) => {
  let data = {
    basicInfo: {},
    about: {},
    handles: {}
  };
  const setData = (profile,cb) => {
    profile.basicInfo.dob = new Date(profile.basicInfo.dob.substring(0,10).split('-').reverse());
    profile.handles = updateHandlesFormat(profile.handles)
    data = profile;
    cb();
  }
  const setBasicInfo = (info) => {
    data.basicInfo = info;
    formatData();
  };
  const setAboutInfo = (info) => {
    data.about = info;
    formatData();
  };
  const getData = () => {
    return data
  };
  const updateHandlesFormat = (arr) => {
    let obj = {};
    arr.forEach(pair=> {
      obj[pair[0]] = pair[1];
    });
    return obj;
  }
  const setHandles = (handles, cb) => {
    for(let prop in handles) {
      if(handles[prop] === ''){
        delete handles[prop]
      }
    }
    if(Object.keys(handles).length > 0){
      data.handles = handles;
    }
    cb();
  };
  const formatData = () => {
    if(data.about.married != undefined){
      data.about.married = data.about.married.toString();
    }
    if(data.about.drink != undefined){
      data.about.drink = data.about.drink.toString();
    }
    if(typeof data.about.location === 'string'){
      data.about.location = data.about.location.split(',');
    }
    if(typeof data.about.interests === 'string'){
      data.about.interests = data.about.interests.split(',');
    }
    if(typeof data.about.charities === 'string'){
      data.about.charities = data.about.charities.split(',');
    }
  };
  const clearData = (cb) => {
    data = {
      basicInfo: {},
      about: {},
      handles: {}
    };
    if(cb){
      cb();
    }
  };
  const saveNewProfile = () => {
    return $http({
      method: 'POST',
      url: '/api/createNewProfile',
      data: data
    })
    .then(() => {
      clearData();
    }).catch(err => {
      console.error(err);
    })
  };
  const update = () => {
    return $http({
      method: 'PUT',
      url: '/api/updateProfile',
      data: data
    }).then(() => {
      clearData()
    }).catch(err => {
      console.error(err);
    })
  };
  return { setData, setHandles, setBasicInfo, setAboutInfo, getData, clearData, saveNewProfile, update };
});
