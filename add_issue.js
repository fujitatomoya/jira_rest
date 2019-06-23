const options = {
    uri: 'https://<jira_hostname>/rest/api/2/issue',
    headers: {
        'Content-Type': 'application/json',
        cookie: session_name + '=' + session_value,
    },
    body: {
        fields: {
            project: {
                key: 'TESTPJ'
            },
            summary: 'First issue in TESTPJ',
            description: "Hi Qiita,\nI am yutwatan.",
            issuetype: {
                id: '10200'  // Task
            },
            reporter: {
                name: 'yutwatan'
            },
        }
    },
    method: 'POST',
    json: true,
};

request(options, function (error, response, data) {
    if (!error && response.statusCode == 201) {
        console.log('Created issue: ' + data.key);  // --> Created issue: TESTPJ-2
    } else {
        console.log('error: ' + response.statusCode + ': ' + data.errorMessages);
        console.log(error);
    }
});