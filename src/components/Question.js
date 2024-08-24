import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Options from "./Option";

export default function Question() {
  const { questions, dispatch, answer, index } = useContext(QuizContext);
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
