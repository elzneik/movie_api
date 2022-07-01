const express = require("express"),
    morgan = require("morgan");

const app = express();

app.use(morgan("common"));

let topMovies = [
    {
        title: "Stranger Things",
    },
    {
        title: "Star Wars",
    },
    {
        title: "John Wick",
    },
    {
        title: "Enders Game",
    },
    {
        title: "Player Number One",
    },
    {
        title: "Underworld",
    },
    {
        title: "Harry Potter",
    },
    {
        title: "Lucky Number Sleven",
    },
    {
        title: "Notting Hill",
    },
    {
        title: "Pulp Fiction",
    }
];

app.get("/movies", (request, response) => {
    response.json(topMovies);
});

app.get("/", (request, response) => {
    response.send("Hello movie lover, welcome to my movie app!");
});

app.use(express.static("documentation"));

app.listen(8080, () => {
    console.log("My app is listening on port 8080! yeah-haw!");
});


