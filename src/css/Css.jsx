import React, { useState } from 'react'
import "./css.css"
const Css = () => {
    const cssQuiz = [
        {
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
            correctAnswer: "Cascading Style Sheets"
        },

        {
            question: "Which property is used to change the text color of an element?",
            options: ["color", "text-color", "font-color", "text-style"],
            correctAnswer: "color"
        },

        {
            question: "What does the 'box-sizing' property do in CSS?",
            options: ["Specifies the type of box model used", "Sets the shadow for an element", "Defines the size of the element", "Specifies how the padding and border are calculated"],
            correctAnswer: "Specifies how the padding and border are calculated"
        },

        {
            question: "How can you select an element with the id 'myElement' in CSS?",
            options: ["#myElement", ".myElement", "element#myElement", "myElement"],
            correctAnswer: "#myElement"
        },

        {
            question: "Which CSS property is used to control the space between lines of text?",
            options: ["line-spacing", "line-height", "text-spacing", "font-spacing"],
            correctAnswer: "line-height"
        },

        {
            question: "Which CSS property is used to add rounded corners to an element?",
            options: ["border-radius", "corner-radius", "round-corner", "border-style"],
            correctAnswer: "border-radius"
        },

        {
            question: "What is the correct CSS syntax for adding a background image?",
            options: ["background-img: url('image.jpg');", "background: image.jpg;", "background-image: url('image.jpg');", "img: url('image.jpg');"],
            correctAnswer: "background-image: url('image.jpg');"
        },

        {
            question: "How do you make a list with bullets in CSS?",
            options: ["list-style-type: bullet;", "list-type: bullet;", "list-style: bullet;", "list: bullet;"],
            correctAnswer: "list-style-type: bullet;"
        },
    ]

    const [currentquestionindex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [correctanswer, setCorrectAnswer] = useState(0)
    const [incorrectanswer, setIncorrectAnswer] = useState(0)

    const currentquestion = cssQuiz[currentquestionindex]

    const handlenext = (stdopt) => {
        setCurrentQuestionIndex(currentquestionindex + 1)
        if(stdopt === currentquestion.correctAnswer){
            setScore(score+1)
            setCorrectAnswer(correctanswer+1)
        }
        else{
            setIncorrectAnswer(incorrectanswer+1)
        }
    }

    return (
        <div className='main_css_div'>
           {
            currentquestion ? (
                <div className="css_question">
                <h2>{currentquestion.question}</h2>
                <ul>
                    {
                        currentquestion.options.map((opt, index) => {
                            return (
                                <div className="css_opt" key={index}>
                                    <button className='css__btn' onClick={() => handlenext(opt)}>{opt}</button>  
                                </div>  
                            )
                        })
                    }
                </ul>
            </div>
            ) : (
                <div className="result">
                    <div className="score">
                        <h1>Total Score :{score}</h1>
                    </div>

                    <div className="correct__answer">
                        <h1>Total correct Answers :{correctanswer}</h1>
                    </div>

                    <div className="incorrect__answer">
                        <h1>Total Incorrect Answers :{incorrectanswer}</h1>
                    </div>
                </div>
            )
           }
        </div>

    )
}

export default Css
