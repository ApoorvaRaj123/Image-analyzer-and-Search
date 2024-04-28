"use client";
import image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Chatbot() {
  const [image, setImage] = useState<string>("");
  const [openAIResponse, setOpenAIResponse] = useState<string>("");

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files === null) {
      return;
    }
    const file = event.target.files[0];

    //convert the users file (locally on their computer) to a base64 string
    //FileReader

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        console.log(reader.result);

        setImage(reader.result);
      }
    };

    reader.onerror = (error) => {
      console.log("Error:" + error);
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (image === "") {
      alert("Please upload an image first.");
      return;
    }

    //POST api/analyzeImage

    await fetch("api/analyzeImage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        image: image,
      }),
    }).then(async (response: any) => {
      //We are getting streaming text response
      //we have to make some logic to handle the streaming text
      const reader = response.body?.getReader();
      setOpenAIResponse("");

      //Reader allows us to read a new piece of info on each "read"
      //"Hello" + "I am" + "John Doe"  reader.read();

      while (true) {
        const { done, value } = await reader?.read();

        //done is true once the response is done
        if (done) {
          break;
        }

        //value: unit8array -> a string

        var currentChunk = new TextDecoder().decode(value);
        setOpenAIResponse((prev) => prev + currentChunk);
      }
    });
  }

  return (
    <div className="h-[36vh] mx-auto mt-[2vh] z-30 hover:shadow-lg dark:bg-[#303134]  focus-within:shadow-lg rounded-md border border-gray-200 dark:border-none px-5 py-3 items-center w-full max-w-md sm:max-w-xl lg:max-w-2xl">
      <h2>Uploaded Image</h2>

      {image !== "" ? (
        <div className="mb-4 overflow-hidden">
          <img src={image} alt="" className="w-[15%] object-cover max-h-28" />
        </div>
      ) : (
        <div className="mb-2 p-3 text-center font-thin text-sm text-zinc-300">
          <p>Uploaded image can be seen here</p>
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-sm font-medium">upload image</label>
          <input
            type="file"
            className="text-sm z-50 border rounded-lg cursor-pointer"
            onChange={(e) => handleFileChange(e)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="p-2 px-4 z-50 mb-2 rounded-md bg-[#2f8686]"
          >
            {" "}
            Analyze Image
          </button>
        </div>
      </form>

      {openAIResponse !== "" ? (
        <div className="border-t border-gray-400 pt-4 overflow-y-auto">
          <h2 className="mb-2">Response</h2>
          <p className="font-thin backdrop-blur-md z-20 text-sm text-zinc-200 ">
            {openAIResponse.split('0:"')}
          </p>
        </div>
      ) : (null)}
    </div>
  );
}
