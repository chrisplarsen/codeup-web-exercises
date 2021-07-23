const serverURL = 'https://oil-bottlenose-pigeon.glitch.me/movies';

//this is a GET request
//    fetch(serverURL)
//        .then(res => res.json())
//        .then(data => console.log(data))

    //this is a POST request
//const reviewObj = {
//        user: "Christian",
//        message: "Really enjoyed the Movies Application!",
//};
//const url = 'https://codeup-restful-example.glitch.me/reviews';
//const options = {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//    },
//    body: JSON.stringify(reviewObj),
//};
//fetch(serverURL, options)
//    .then( response => console.log(response) ) /* review was created successfully */
//    .catch( error => console.error(error) ); /* handle errors */

function AJAX(url, method = "GET", data) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    return fetch(url, options)
        .then(res => res.json())
        .then(responseData => responseData)
        .catch(err => err)
}

    //AJAX(serverURL, "POST", {title: "behbehbeh"})
    //    .then(function (data) {
    //        console.log(data)
    //    });

//This is to fetch a single movie
    //AJAX(serverURL + "/3")
    //.then(data => console.log(data))

//This is to update an individual movie/record/yknow
    AJAX(serverURL + "/9", "PUT", {
        name: "Polaris",
        message: "We are ready for the weekend"
    })
        .then(data => console.log(data))


//PATCH method, check the message update
//AJAX(serverURL + "/9", "PATCH", {
//    message: "Patch edits one piece of the individual whole"
//})
//    .then(data => console.log(data))

//DELETE method
//    AJAX(serverURL + "/6", "DELETE")
//    .then(data => console.log(data))

    AJAX(serverURL)
    .then(data => console.log(data))