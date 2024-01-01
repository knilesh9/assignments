const jwt = require('jsonwebtoken');
const zod = require('zod')
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    const emailSchema = zod.string().email()
    const passwordSchema = zod.string().min(6)
    try{
        console.log(jwt.sign(emailSchema.parse(username), passwordSchema.parse(password)))
        return jwt.sign(emailSchema.parse(username), passwordSchema.parse(password))
        //here, if 1st throws exception the 2nd won't run keep in mind.
    }catch (error){

        // console.log(error.errors[0].code)
        // here, the above logs the errors array elem 0 property code which contains the reason.

        return null
        //don't forget to return null, or else JS functions return undefined.
    }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try{
        let isVerified = jwt.verify(token, jwtPassword)
        return true;
    }catch (err){
        return false;
        //return !!isVerified coerce the value to boolean
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    let decodedJwt = jwt.decode(token)
    if(decodedJwt){
        return true;
    }else{
        return false;
    }
}

let signedJwt = signJwt("rahul@google.com", jwtPassword)
verifyJwt(signedJwt)
decodeJwt(signedJwt)

// const jwtToken = signJwt("rahul@google.com", jwtPassword)
// //When it's correct schema then the decode returns the email string.
//
// console.log(verifyJwt(jwtToken))
// console.log(jwtToken);
// console.log(decodeJwt(jwtToken))

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
