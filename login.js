const request = require('request');

// Request params
const options = {
    uri: 'https://<jira_hostname>/rest/auth/1/session',
    headers: {
        Content-Type: 'application/json',
    },
    body: {
        username: '<your_account>',
        password: '<your_password>',
    },
    method: 'POST',
    json: true
};

// Post request
request(options, function (error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log(data.session.name + ' = ' + data.session.value);
    } else {
        console.log('error: ' + response.statusCode + ': ' + data.errorMessages);
    }
});