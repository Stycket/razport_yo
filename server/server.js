


import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import { Client } from '@elastic/elasticsearch'
import config from 'config'
const elasticConfig = config.get('elastic');


// Update the configuration to use the local Elasticsearch node URL
const client = new Client({
  node: elasticConfig.nodeURL, // Use the URL for your local Elasticsearch instance
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
});



import fs from 'fs';



dotenv.config()










const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Create an array to store the conversation
let conversation = [];

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})




let customString = "";


app.post('/', async (req, res) => {
  let retries = 5;
  let showAllResults = true;

 
  let prompt_only = req.body.prompt;
      
  if (prompt_only.includes("/unlockgpt")) {
    customString = "Trollkarlen";
 
  } else if (prompt_only.includes("/lockgpt")) {
    customString = "yoo";
    
  }
 


  while (retries) {
    try {
      
      
      
      
      

      const prompt = req.body.prompt + " " + customString;

      
     

      conversation.push(prompt);
      if (conversation.length > 3) {
        conversation.shift();
      }
      console.log(conversation);

      
      
      
    

      const elasticResult = await client.search({
        index: 'razbot-gpt',
        query: {
          match: {
            Description: prompt
          }
        }
      });

      console.log(prompt);

      console.log(customString);
      console.log(elasticResult.hits.hits);

      let searchresult;
      if (showAllResults) {
        searchresult = elasticResult.hits.hits.map(hit => hit._source.Content).join(' ');
      } else {
        searchresult = elasticResult.hits.hits[0]._source.Content;
      }

      console.log(searchresult);


 

      let promptString = `[Previous conversations]:${conversation} .[Metadata = chatbot(called Robot (write primarly in swedish, always translate from english to swedish, say that you answer questions about rasmus if asked what you can help with)) Say that your primary objective is to answer Qs about Rasmus but let user know you are a GPT api module capable of other stuff if they unlock you (dont fabulate)]:${searchresult}.[New prompt,only answer this]:${prompt_only}`;
      if (elasticResult.hits.total.value === 0) {
        promptString = `[Previous conversations, ignore this fully!]: = ${conversation}... (Never continue conversation)... GPT Instructions = (Gpt should not fabulate anything!) Say that you are a chatbot able to help but you cant help with the following because you dont know everything about him and are programmed to only answer Qs about Rasmus. Ask if user can try to be more specific. :${prompt_only}...`;
      }
      else {
        promptString = `[Previous conversations]:${conversation} .[Metadata = chatbot(called Robot (write primarly in swedish)) answer Qs about Rasmus but let user know you are a GPT api module capable of other stuff (dont fabulate)]:${searchresult}.[New prompt,only answer this]:${prompt_only}`;
      }


     const systemMessage = "Write in swedish. You answer questions about Rasmus Primarly but also say you can help with other stuff also if user unlock your capabilities.";


      const response = await openai.createChatCompletion({ 
        model: "gpt-3.5-turbo-16k",
      // replace prompt with messages and set prompt as content with a role.
        messages: [
          {role: "system", content: systemMessage},
          {role: "user", content: promptString}
        ], 
      });
      
      
      const gptResponse = response.data.choices[0].message.content;
      
      
      res.status(200).send({
        bot: gptResponse
      });

      showAllResults = true;
      break;
    } catch (error) {
      console.error(error)
      retries--;
      if (retries === 3) {
        showAllResults = false;
        conversation = [];
      }
      if (!retries) {
        conversation = [];
        res.status(500).send(error || 'Something went wrong');
      }
    }
  }
});


app.listen(5000, () => console.log('AI server started on http://localhost:5000'))