import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";
export const dynamic = 'force-dynamic';




const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  // {image = base64 string}

  const { image } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-4-vision-preview",
    // model: "gpt-4-turbo-2024-04-09",
    stream: true,
    max_tokens: 500,
    messages: [
      {
        role: "user",
        //@ts-ignore
        content: [
          {
            type: "text",
            text: "Identify the content of the image whether it has text, graphs, tables, mathematical formulae, flowcharts and so on. Based on the type of content, extract all text along with any relevant information and inferences. Display the result accurately in a structured format.",
          },
          {
            type: "image_url",
            image_url: image, //base64 images
          },
        ],
      },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
