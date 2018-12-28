const admin = require('firebase-admin');

module.exports = function(req, res) {
    // Verify the user provided a phone number
    if (!req.body.phone) {
        return res.status(422).send({ error: 'No Phone Provided' });
    }

    // Format the phone number to remove dashes and parens
    // const phone = String(req.body.phone).replace(/[^0-9]/g, '');
    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    if (phone === "") return res.status(422).send({ error: 'Invalid Phone Provided' });

    // Create a new user account using phone number
    admin.auth().createUser({ uid: phone })
        // Respond to the user request, saying the account was made
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: err }));

}
