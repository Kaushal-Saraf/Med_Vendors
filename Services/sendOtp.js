const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTHTOKEN;

const client = require('twilio')(accountSid, authToken);

export const sendOtp = async (body, to) => {
    const response = await client.messages
      .create({
        body: body,
        to: to,
        from: process.env.TWILIO_CONTACT, 
    })
    return response
}

