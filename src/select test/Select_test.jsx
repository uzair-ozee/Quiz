import React, { useEffect, useState } from 'react'
import "./select_test.css"
import { Link } from 'react-router-dom'

const Select_test = () => {

    const [userdata, setUserData] = useState({})


    const selectTest = [
        {
            id: 1,
            testName: "HTML",
            url:"/html"
        },

        {
            id: 2,
            testName: "CSS",
            url:"/css"
        },

        {
            id: 3,
            testName: "JAVASCRIPT",
            url:"/java"
        },
    ]

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        if (user) {
            setUserData(user)
        }
    }, [])

    // useEffect(()=>{
    //     if(localStorage.setItem('userInfo')){
    //         navigatet
    //     }
    // })

    const [showpopup, setShowPopup] = useState(false)

    const pin = "test123"

   const [ispin,setIsPin]=useState('')

   const checkPin= (e)=>{
    e.preventDefault()
    if(pin === ispin){
        setShowPopup(false)
    }
    else{
        alert("wrong pin")
    }
   }

    return (

        <div className='main_select_div'>

            <div className="greeting">
                <span>Welcome</span>
            </div>
            
            <div className="user__detail">
                <div>
                    <span>{userdata.name}</span>
                </div>
                <div>
                    <span>{userdata.lastname}</span>
                </div>

            </div>

            <div className="test__type">
                <span>Select Your Test Type</span>
            </div>

            <div className="names">
                {
                    selectTest.map((selectTest) => {
                        return (
                            <Link to={selectTest.url}>
                            <div className="quizname" key={selectTest.id} onClick={()=>setShowPopup(true)}>
                                <span>{selectTest.testName}</span>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>

            {
                showpopup && (

                    <div className="popUp">
                        <form onSubmit={checkPin} className="enter__key">
                            <input type="password"  value={ispin} onChange={(e)=>setIsPin(e.target.value)} placeholder='Enter Key'/>
                        </form>
                    </div> 

                )
            }

        </div>
    )
}

export default Select_test
