import lg4 from "../images/recc.png"
import lg1 from "../images/fam.png"
import "./sigm.css"
import { Link } from "react-router-dom"
import Nav from "../frame1/nav/nav"
import Dash from "../dash/dash"
import { useState } from "react"
function Sign (){
    const [law, setlaw]=useState(true)
    return(
        <div>
            { !law && <Dash
            ram={setlaw}/>}
      { law && <div  className="sign-1">
            <div > 
                <img style={{margin:"20px"}} src={lg4} />
            </div>
            <div>
            <div className="create-1" >
                            <h1 className="create-h">Login</h1>
                            <p className="create-pa" >Not yet a member <span className="create-lg" > <Link style={{textDecoration:"none",}} to ="create" >Register Here</Link></span></p>
    
                            <label className="create-pa" > Email Address </label>
                            <input className="create-in" placeholder="Email Address"/>
                            <label className="create-pa" >passowrd</label>
                            <input className="create-in" placeholder="passwrd" />
                            
                            <button className="create-btn" onClick={()=>setlaw(false)}  >login </button>
                           <p className="create-pa" style={{textAlign:"center"}} >or</p>
                            <img className="create-btn1" src={lg1} />
                            {/* <button className="create-btn1" >sign in with google </button> */}
                        </div>
            </div>
            
        </div>}
        </div>
    )
}

export default Sign