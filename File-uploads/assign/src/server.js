const app = require("./index")

const connect = require("./configs/db")

app.listen(2022, async () => {
    await connect()
    console.log("Listening on PORT 2022")
})