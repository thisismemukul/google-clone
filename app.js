const { query } = require("express");
const express = require("express");
const request = require("request");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    // var api_key = "cbbde2093c7159a4cc2c9e483eccf03e";
    // var query = "google";
    // request("http://api.serpstack.com/search?access_key=" + api_key + "&query=" + query, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         const data = JSON.parse(body);
    //         var check_req = data["request"]["success"]
    //         if (check_req === true) {
    //             res.render("home", { data: data });
    //         } else {
    //             console.log("Server Error")
    //         }
    //     }
    // });
    res.render("home");

});

// app.get("/search", function(req, res) {
//     var api_key = "cbbde2093c7159a4cc2c9e483eccf03e";
//     var query = "google";
//     request("http://api.serpstack.com/search?access_key=" + api_key + "&query=" + query, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             const data = JSON.parse(body);
//             var check_req = data["request"]["success"]
//             if (check_req === true) {
//                 res.render("home", { data: data });
//             } else {
//                 console.log("Server Error")
//             }
//         }
//     });
// });

// app.get("/search", function(req, res) {
//     var api_key = "2BC477F58495465FBCB97043A36843A7";
//     var query = req.query.search;
//     request("https://api.scaleserp.com/search?api_key=" + api_key + "&q=" + query + "&google_domain=google.co.in&location=Maharashtra,India&gl=in&hl=en", function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             const data = JSON.parse(body);
//             var check_req = data["request_info"]["success"]
//             if (check_req === true) {
//                 res.render("search", { data: data, query: query });
//             } else {
//                 console.log("Server Error")
//             }
//         }
//     });
// });

app.get("/search", function(req, res) {
    var api_key = "2BC477F58495465FBCB97043A36843A7";
    var query = req.query.search;
    request("https://api.scaleserp.com/search?api_key=" + api_key + "&q=" + query + "&google_domain=google.co.in&location=Maharashtra,India&gl=in&hl=en", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            var check_req = data["request_info"]["success"]
            if (check_req === true) {
                res.render("search", { data: data, query: query });
            } else {
                console.log("Server Error")
            }
        }
    });
});

app.get("*", function(req, res) {
    res.render("404");
});
const port = process.env.PORT || '5500';
app.listen(port, () => console.log(`Server Started on Port: ${port}`));