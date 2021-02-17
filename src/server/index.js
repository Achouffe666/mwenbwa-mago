/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
import express from "express";
import path from "path";
//import Gamer from "../../data/models/modelGamer.js";
const {MongoClient} = require("mongodb");
const {APP_PORT} = process.env;

const app = express();

const uri =
    "mongodb+srv://mago:mago@cluster0.ye3yj.mongodb.net/mago?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const gamer = {
    Name: "Maud-Pixel",
    Password: 1234,
    Email: "leleuxmaud@gmail.com",
    ColorUser: "pink",
};

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ping: 1});
        const result = await client.insertOne(gamer);
        console.log("Connected successfully to server");
        console.log(result.insertedCount);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.get("/hello", (req, res) => {
    //console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
