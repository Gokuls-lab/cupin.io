import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyB9Far3t4hEF0qoBW7VzfghDAgD7YAsmSY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a magic backpack.";

async function run(prompt) {
    

const result = await  model.generateContent(prompt);
console.log(result.response.text());
}

//run();