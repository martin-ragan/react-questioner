import React from "react";
import {useState} from "react";
import {Question} from "./Question";

export const Questioner = () => {
  const questions = [
    {
      question: "feeling nervous, anxious, or on edge",
    },
    {
      question: "not being able to stop or control worrying",
    },
    {
      question: "worrying too much about different things",
    },
  {
      question: "having trouble relaxing",
    },
    {
      question: "being so restless that it is hard to sit still",
    },
    {
      question: "becoming easily annoyed or irritable",
    },
  ];

  const results = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it is hard to sit still",
    "Becoming easily annoyed or irritable",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number []>([]);
  const [result, setResult] = useState("");

  const calcResult = () => {
    let sum = 0;
    answers.forEach((answer) => {
      sum += answer;
    });
    setResult(results[Math.round(sum / answers.length)]);
  };
  return (
      <form className="bg-white rounded-2xl px-12 py-6 flex flex-col drop-shadow-xl">
          { currentQuestion < questions.length
              &&
              <>
                <h1 className="text-2xl font-bold mb-4 text-gray-500">Tell us about your mental health</h1>
                <p className="text-gray-600 mb-6">
                We will use this information to help you get the best care possible.
                </p>
              </>
          }
        <div className="mb-12">
          {questions.map((question, index) => (
              currentQuestion === index && <Question
                  key={index}
                  question={question.question}
                  setAnswer={(answer: string) => {
                    setAnswers((answers) => [...answers, parseInt(answer)]);
                  }}
                  position={index}
                  setQuestion={setCurrentQuestion}
              />
          ))}
            {
              currentQuestion === questions.length && <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Thank you for your answers with</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={(e) => {
                          e.preventDefault();
                          calcResult();
                          setCurrentQuestion(currentQuestion + 1);
                        }}
                >
                    Submit
                </button>
              </div>
            }
          {
            currentQuestion === questions.length + 1 && <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-4">Your seems to have a problem</h1>
              <p className="text-gray-600 mb-6">
                {result}
              </p>
            </div>
          }
        </div>
      </form>
  );
};
