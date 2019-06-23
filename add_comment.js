const options = {
    uri: 'https://<jira_hostname>/rest/api/2/issue/TESTPJ-2/comment',
    headers: {
        'Content-Type': 'application/json',
        cookie: session_name + '=' + session_value,
    },
    body: {
        body: "I'm hungry"
    },
    method: 'POST',
    json: true,
};

request(options, function (error, response, data) {
    if (!error && response.statusCode == 201) {
        console.log('Added date of comment:' + data.created);
    } else {
        console.log('error: ' + response.statusCode + ': ' + data.errorMessages);
    }
});