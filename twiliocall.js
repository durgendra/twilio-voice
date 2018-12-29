var accountSid = "XX"; // Your Account SID from www.twilio.com/console
var authToken = "XX"; // Your Auth Token from www.twilio.com/console

var twilio = require("twilio");
var client = new twilio(accountSid, authToken);

client.calls
  .create({
    // body: 'Hello from Node',
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "XX", // Text this number
    from: "XX", // From a valid Twilio number
  })
  .then((call) => process.stdout.write(call.sid));
