import React, {FC} from "react";

interface props {
  question: string;
  setAnswer: Function;
  position: number;
  setQuestion: Function;
}
export const Question: FC<props> = ({ question, setAnswer, position, setQuestion}) => {
    const [answer, setAnswerState] = React.useState('');
  return (
      <>
        <h1 className="mb-4 text-2xl font-bold">Are you {question} ?</h1>
          <ul className="flex gap-4 justify-center mb-12">
              <li>
                  <input type="radio"
                         className="hidden peer"
                         name="answer"
                         value="1"
                         id="question-1"
                         onChange={(e) => setAnswerState(e.target.value)}
                  />
                  <label htmlFor="question-1"
                         className="py-2 px-4 rounded-xl bg-indigo-500 text-white
                                    peer-checked:bg-pink-600 cursor-pointer">Not at all</label>
              </li>
              <li>
                  <input type="radio"
                         className="hidden peer"
                         name="answer"
                         value="2"
                         id="question-2"
                         onChange={(e) => setAnswerState(e.target.value)}
                  />
                  <label htmlFor="question-2"
                         className="py-2 px-4 rounded-xl bg-indigo-500 text-white
                                    peer-checked:bg-pink-600 cursor-pointer">Several days</label>
              </li>
              <li>
                  <input type="radio"
                         className="hidden peer"
                         name="answer"
                         value="3"
                         id="question-3"
                         onChange={(e) => setAnswerState(e.target.value)}
                  />
                  <label htmlFor="question-3"
                         className="py-2 px-4 rounded-xl bg-indigo-500 text-white
                                    peer-checked:bg-pink-600 cursor-pointer">More than half the days</label>
              </li>
              <li>
                  <input type="radio"
                         className="hidden peer"
                         name="answer"
                         value="4"
                         id="question-4"
                         onChange={(e) => setAnswerState(e.target.value)}
                  />
                  <label htmlFor="question-4"
                         className="py-2 px-4 rounded-xl bg-indigo-500 text-white
                                    peer-checked:bg-pink-600 cursor-pointer">Nearly every day</label>
              </li>
          </ul>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-xl w-full"
                      onClick={() => {
                          setQuestion(position + 1)
                          setAnswer(answer)
                      }}
                      disabled={answer === ''}
              >
                      Next
              </button>
      </>
  );
}
