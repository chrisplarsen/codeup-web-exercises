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

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);
