const express = require("express"),
    morgan = require("morgan"), 
    fs = require("fs"), 
    path = require("path");

const app = express();

app.use(morgan("common"));
app.use(express.static("public"));

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

app.use((err, req, res, next)=> {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// create a write stream
const accessLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {flags: "a"})
// set up the logger
app.use(morgen("combined", {stream: accessLogStream}));

app.listen(8080, () => {
    console.log("My app is listening on port 8080! yeah-haw!");
});


