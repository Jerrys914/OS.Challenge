const router = require('express').Router();
const Profile = require('./profiles/profileController');

router.post('/api/createNewProfile', Profile.createNewProfile);
router.get('/api/getAllProfiles', Profile.getAllProfiles);
router.put('/api/updateProfile');

module.exports = router;