const express = require('express')
const app = express()
app.use(express.static("public"));

app.get('/', function (req, res) {
    // res.send('Hello World')
    res.set({
	"Allow-access-Allow-Origin": "*",
    });
    return res.redirect("index.html");
})

app.listen(3000)