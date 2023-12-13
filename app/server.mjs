const PORT = 8000;
import express from 'express';
import cors from 'cors';
const app = express();
import fetch from 'node-fetch';

app.use(express.json());
app.use(cors());

const API_KEY = "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";
const options = {
    method : 'POST',
    headers : {
       "authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model : "gpt-3.5-turbo",
      messages : [{role: "user", content : "Hello, how are you?" }]
    })
}
app.post('/completions', async (req, res) => {
   try {
   const response = await fetch(`https://api.openai.com/v1/chat/completions`, options)
    const data = await response.json();
    res.send(data);
   } catch (error) {
       console.log(error);
   }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

