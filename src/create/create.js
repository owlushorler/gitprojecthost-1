import lg from "../images/Rectangle 28.png"
import "./create.css"
import lg1 from "../images/fam.png"
import Nav from "../frame1/nav/nav"
function Create (){
    return(
        <div>
            <div className="create"  >
                    <div> <img style={{margin:"30px"}} src={lg} /> </div>
                     <div>
                        <div className="create-1" >
                            <h1 className="create-h">Create an Account</h1>
                            <p className="create-pa" >Already have an accunt <span className="create-lg" >login</span></p>
                            <label className="create-pa" > first Name </label>
                            <input className="create-in" placeholder="first Name" />
                            <label className="create-pa" > surname </label>
                            <input className="create-in" placeholder="Surname"/>
                            <label className="create-pa" > Email Address </label>
                            <input className="create-in" placeholder="Email Address"/>
                            <label className="create-pa" >passowrd</label>
                            <input className="create-in" placeholder="passwrd" />
                            <label className="create-pa" > confirm passowrd</label>
                            <input className="create-in" placeholder="confirm passowrd"/>
                            <label className="create-pa" > Referall code </label>
                            <input className="create-in" placeholder="refereral"/>
                           <p  className="create-pa" > <input type="radio"/> i agree to My Trust Network <span style={{color:"#0B6BA8"}} >Terms of use and private policy</span> </p>
                            <button className="create-btn" >Create Account </button>
                            <p style={{textAlign:"center"}} className="create-pa" >or</p>
                            <img className="create-btn1" src={lg1} />
                            {/* <button className="create-btn1" >sign in with google </button> */}
                        </div>
                     </div>
            </div>

        </div>
    )
}

export default Create           