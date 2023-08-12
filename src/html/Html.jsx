import React, { useState } from 'react'
import "./html.css"

const Html = () => {
  const htmlQuiz = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Venus', 'Mars', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'CH4'],
      correctAnswer: 'H2O',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the square root of 64?',
      options: ['6', '8', '10', '12'],
      correctAnswer: '8',
    },
  ];

  const [currentquestionindex, setCurrentQuestionIndex] = useState(0)
  const [trueanswer, setTrueAnswer] = useState(0)
  const [falseanswer, setFalseAnswer] = useState(0)
  const [score, setScore] = useState(0)
  const currentquestion = htmlQuiz[currentquestionindex]

  const handlenext=(selectedOp)=>{
    setCurrentQuestionIndex(currentquestionindex+1)
    if(selectedOp === currentquestion.correctAnswer){
      setScore(score+10)
      setTrueAnswer(trueanswer+1)
    }
    else{
      setFalseAnswer(falseanswer+1)
    }
  }
    return(
      <div className="main__html_div">
        {
          currentquestion ? (
            <div className="question"><h3>{currentquestion.question}</h3>
            <ul>
              {
                currentquestion.options.map((opt,index)=>{
                  return(
                  <div className="option_div" key={index}>
                    <button className='otp' onClick={()=>handlenext(opt)}>{opt}</button>
                  </div>
                  )
                })
              }
            </ul>
            </div>
          )
          :
          (
            <div className="result">

              <div className="score">
                <h1>Your Score Is :{score}</h1>
              </div>

              <div className="correct__answer">
                <h1>Correct Answers :{trueanswer}</h1>
              </div>

              <div className="incorrect__answer">
                <h1>Incorrect Answers :{falseanswer}</h1>
              </div>

            </div>
          )
        }
      </div>
      
    )
 }
export default Html