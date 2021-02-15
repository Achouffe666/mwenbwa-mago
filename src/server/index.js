/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
import express from "express";
import path from "path";
// import mongoose from "mongoose";
// const uri = "mongodb+srv://wkBh2VE2iHJoaFRE:wkBh2VE2iHJoaFRE@cluster0.wxzca.mongodb.net/Cluster0?retryWrites=true&w=majority";

const {APP_PORT} = process.env;

const app = express();
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// mongoose.connect(uri, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useCreateIndex: true
// })

app.get("/hello", (req, res) => {
    //console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

// const db = mongoose.connection
// db.on('error',(error) => console.error(error))
// db.once('open',() => console.log('connected to database'))

// app.use(express.json())
// app.use(Register)
