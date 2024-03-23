import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import OpenAI from 'openai';

// Creating new Express app
const app = express();

// Using bodyParser middleware to parse incoming requests as json
app.use(bodyParser.json())

// Using bodyParser middleware to parse incoming requests as URL Data 
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up OpenAI API 
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})


// Handling Incoming requests
app.post('/converse', async (request, response) => {

    // Extracting user's message from the prompt
    const message = request.body.message;

    // Calling openAI API 
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
    })

    response.send(chatCompletion.choices[0].message);
    console.log(chatCompletion.choices[0].message);
})

// Listen to app on PORT
app.listen(process.env.PORT, () => {
    console.log(`App is listening to port ${process.env.PORT}`);
})