const options = {
    uri: 'https://<jira_hostname>/rest/api/2/project',
    headers: {
        'Content-Type': 'application/json',
        cookie: session_name + '=' + session_value,
    },
    body: {
        key: 'TESTPJ',
        name: 'Test Project',
        lead: "<project_leader_account>",
        projectTypeKey: 'business',
    },
    method: 'POST',
    json: true,
};

request(options, function (error, response, data) {
    if (!error && response.statusCode == 201) {
        console.log('Created project: ' + data.key); // --> Created project: TESTPJ
    } else {
        console.log('error: ' + response.statusCode + ': ' + data.errorMessages);
    }
});