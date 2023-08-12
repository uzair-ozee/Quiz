import React, { useState } from 'react'
import "./java.css"

const Java = () => {

const javaQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      correctAnswer: "CSS",
    },
    {
      question: "What does 'JS' stand for?",
      options: ["Java Source", "JavaScript", "Just Saying", "Joint Statement"],
      correctAnswer: "JavaScript",
    },
    {
      question: "What symbol is used to access jQuery?",
      options: ["$", "#", "@", "&"],
      correctAnswer: "$",
    },
    {
      question: "Which method is used to add a new element to an array?",
      options: ["push()", "add()", "append()", "insert()"],
      correctAnswer: "push()",
    },
  ];

  const [currentquestioinindex,setCurrentQuestionIndex]=useState(0)
  const [score, setScore]=useState(0)
  const [tureanswer,setTrueAnswer]=useState(0)
  const [falseanswer,setFalseAnswer]=useState(0)

  const currentquestion=javaQuestions[currentquestioinindex]

  const handlenext = ( javaopt) =>{
    setCurrentQuestionIndex(currentquestioinindex+1)
    if(javaopt === currentquestion.correctAnswer){
        setScore(score+1)
        setTrueAnswer(tureanswer+1)
    }
    else{
        setFalseAnswer(falseanswer+1)
    }
  }
  
  
  return (
    <div className='main_java_div'>

     {
        currentquestion ? (
            <div className="java_question">
            <div className="question">
                <h2>{currentquestion.question}</h2>
            </div>

            <ul>
            {
                currentquestion.options.map((option,index)=>{
                    return(
                       <div className="java__options" key={index}>
                            <button className='java_opt_btn' onClick={()=>handlenext(option)}>{option}</button>
                       </div>
                    )
                })
            }
            </ul>
        </div>
        ) : (
            <div className="result">

                <div className="score"><h1>Total Score Is : {score}</h1></div>

                <div className="correct__answer"><h1>Total Correct Answer is : {tureanswer} </h1> </div>
                
                <div className="incorrect_answer"><h1>Total Incorrect Answer is : {falseanswer}</h1></div>

            </div>
        )
     }
      
    </div>
  )
}

export default Java
