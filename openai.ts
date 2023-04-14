import {Configuration, OpenAIApi} from "openai";

const config: Configuration = new Configuration({
    organization: process.env.OPEN_AI_ORG_ID,
    apiKey: process.env.OPEN_AI_ORG_KEY
});

const openai = new OpenAIApi(config);

export default openai;
