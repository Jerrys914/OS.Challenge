const router = require('express').Router();

router.post('/api/createNewProfile');
router.get('/api/getAllProfiles');
router.put('/api/updateProfile');

module.exports = router;