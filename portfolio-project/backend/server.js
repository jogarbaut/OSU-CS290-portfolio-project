const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const exerciseRoutes = require("./routes/exerciseRoutes")

dotenv.config()

const app = express()
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
  })

app.use("/api", exerciseRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
