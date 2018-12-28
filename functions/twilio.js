const twilio = require('twilio');

const accountSid = 'AC5222f2a2a59ff8579b99d214db4695cf';
const authToken = '5d518b726b79f3229a3d4a1ca8f679fc';

module.exports = new twilio.Twilio(accountSid, authToken);
