import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const translatedText = req.query.translatedText || "Translation will appear here...";
    res.render("index.ejs", { translatedText });
});

app.post("/translate", async (req, res) => {
    const textToTranslate = req.body.sourceText;
    const sourceLang = req.body.sourceLang;
    const targetLang = req.body.targetLang;

    const options = {
        method: 'POST',
        url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.RAPIDAPI_HOST,
          'Content-Type': 'application/json'
        },
        data: {
          from: sourceLang,
          to: targetLang,
          q: textToTranslate,
        }
    };

    try {
        const response = await axios.request(options);
        const translatedText = response.data;
        console.log(translatedText);
        res.redirect(`/?translatedText=${encodeURIComponent(translatedText)}`);
    } catch (error) {
        console.error(error);
        res.redirect(`/?translatedText=${encodeURIComponent('Error translating text. Please try again.')}`);
    }

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





