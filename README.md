# AI Powered Chatbot 

This project demonstrates the creation of a conversational chatbot using Node.js and Express.js, powered by OpenAI's GPT-3.5 model. The chatbot interacts with users in a human-like manner, responding to messages with contextually relevant information.

## Features
1. Utilizes OpenAI's powerful GPT-3.5 model for natural language processing.
2. Implements a RESTful API with Express.js to handle incoming messages.
3. Parses incoming JSON requests using body-parser middleware.
4. Allows users to communicate with the chatbot through a simple HTTP POST request.

## Usage
1. Start the server : 

`npm start`

2. Open Postman or any similar tool to send HTTP POST requests to `http://localhost:3000/converse`. Set the body of the request as JSON with the following structure:

```
{
    "message": "Your message here"
}
```

3. Upon receiving the request, the chatbot will process the message and respond with an appropriate message based on the conversation context.