import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ questions, setQuestions }) {
  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    }).then(()=>setQuestions((previousData)=>previousData.filter(question =>  question.id !== id)))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        { questions.map((question) => {
          return <QuestionItem question= {question} key={question.id} handleDelete={()=> handleDelete(question.id)}/>
          }) }
      </ul>
    </section>
  );
}
export default QuestionList;
