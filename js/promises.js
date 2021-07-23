function getUserEventAsJSON(userName) {
    //step 1. fetch from github
    //step 2. process response as json, IE, call json()
    //step 3. pull out event [0].created_at and return as promise
    return fetch('https://api.github.com/users/' + userName + '/events/public',
        {headers: {'Authorization': 'token ' + myGitHubKey}})
        .then((response,) => {
            return response.json();
        }).then(function (jsonData) {
            return jsonData[0].created_at;
        });
}

function wait(numMillis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numMillis);
        }), numMillis;
    });
}