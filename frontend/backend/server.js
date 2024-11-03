const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const express = require("express");
require("colors");
const app = express();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.send({ message: result.response.text() });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send({ error: "An error occurred while generating content." });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`App is running og on port ${port}`.bgGreen.red);
});

