angular.module('osc.services', [])
.factory('Profile', ($http) => {
  let data = {
    basicInfo: {},
    about: {}
  };
  const setData = (profile) => {
    data = profile;
  }
  const setBasicInfo = (info) => {
    data.basicInfo = info;
  };
  const setAboutInfo = (info) => {
    data.about = info;
  };
  const getData = () => {
    if(data.basicInfo.dob){
      data.basicInfo.dob = new Date(data.basicInfo.dob)
    }
    if(data.about.married != undefined){
      data.about.married = data.about.married.toString();
    }
    if(data.about.drink != undefined){
      data.about.drink = data.about.drink.toString();
    }
    return data
  };
  const clearData = () => {
    data = {
      basicInfo: {},
      about: {}
    };
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
  return { setData, setBasicInfo, setAboutInfo, getData, clearData, saveNewProfile, update };
});
