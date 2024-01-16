import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const port = 3003;

const nitroSchema = new Schema({
  icon: String, // String is shorthand for {type: String}
  title: String,
  description: String,
});
const Nitro = mongoose.model("Nitro", nitroSchema);
app.get("/", async (req, res) => {
  try {
    const result = await Nitro.find({});
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Nitro.findById(id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});
app.post("/", async (req, res) => {
  try {
    const { icon, title, description } = req.body;
    const result = new Nitro({ icon, title, description });
    await result.save();
    res.send("Got a POST request");
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Nitro.findByIdAndDelete(id);

    res.send("Got a DELETE request at /user");
  } catch (error) {
    res.send(error.message);
  }
});

mongoose
  .connect("mongodb+srv://samir:samir@cluster0.ywgcy8n.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
