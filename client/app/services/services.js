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
    return data
  };
  const clearData = () => {
    data = {
      basicInfo: {},
      about: {}
    };
  };
  const saveNewProfile = () => {
    filterData();
    return $http({
      method: 'POST',
      url: '/api/createNewProfile',
      data: data
    })
    .then(() => {
      clearData();
    })
  };
  const filterData = () => {
    data.basicInfo.sport = data.basicInfo.sport.trim().split(',')
    if(data.about.charaties){
      data.about.charaties = data.about.charaties.trim().split(',')
    } else {
      data.about.charaties = []
    }
    if(data.about.interests) {
      data.about.interests = data.about.interests.trim().split(',')
    } else {
      data.about.interests = []
    }
    
    console.log('FILTERED DATA: ', data)
  };
  return { setData, setBasicInfo, setAboutInfo, getData, clearData, saveNewProfile };
});
