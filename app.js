const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
// const { WSAEWOULDBLOCK } = require("constants");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//const apiKey = "0f86c38ce50793666a731475cd0ef5de";

//const coordApiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=22.9734229&lon=78.6568942&appid=0f86c38ce50793666a731475cd0ef5de&units=metric"
var msg = ""
function alert() {
    msg = "Error";
}
app.get("/", function (req, res) {

    const query = "Jabalpur";
    const appKey = "0f86c38ce50793666a731475cd0ef5d";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appKey + "e&units=" + unit;

    https.get(url, function(response) {

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const city = weatherData.name;
            const des = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            const feels_like = weatherData.main.feels_like;
            const minTemp = weatherData.main.temp_min;
            const maxTemp = weatherData.main.temp_max;
            const windSpeed = weatherData.wind.speed;
            const visibile = weatherData.visibility;
            const humi = weatherData.main.humidity;
            const imgCode = weatherData.weather[0].icon;

            res.render("weather", {
                cityName: city,
                temperature: temp,
                description: des,
                feelsLike: feels_like,
                minTemperature: minTemp,
                maxTemperature: maxTemp,
                speed: windSpeed,
                visibility: visibile,
                humidity: humi,
                icon: imgCode,
                message: msg,
            });
        })

    })
})

app.post("/", function (req, res) {
 
    const query = req.body.cityName;
    const appKey = "0f86c38ce50793666a731475cd0ef5d";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appKey + "e&units=" + unit;

    https.get(url, function (response) {
        console.log(response.statusCode);

        if(response.statusCode !== 200) {
            alert();
            res.redirect("/");
        }
        else {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const city = weatherData.name;
            const des = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            const feels_like = weatherData.main.feels_like;
            const minTemp = weatherData.main.temp_min;
            const maxTemp = weatherData.main.temp_max;
            const windSpeed = weatherData.wind.speed;
            const visibile = weatherData.visibility;
            const humi = weatherData.main.humidity;
            const imgCode = weatherData.weather[0].icon;

            res.render("weather", {
                cityName: city,
                temperature: temp,
                description: des,
                feelsLike: feels_like,
                minTemperature: minTemp,
                maxTemperature: maxTemp,
                speed: windSpeed,
                visibility: visibile,
                humidity: humi,
                icon: imgCode,
                message: "",
            });

        })
    }

    })

})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000");
})

// app.listen(3000, function () {
//     console.log("Server started on port 3000");
// })