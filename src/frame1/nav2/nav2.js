import "./nav2.css"
import lg from "../../images/lg2.png"
function Nav2(){
    return(
        <div className="tp" > 
            <nav className="tp-nav2" >

                <nav className="tp-h1" >
                    <h1   >My Trust Network; A <br/> Platform <br/> 
                     <span style={{color: "#A00BAB"}} >Community Services.</span></h1>
                </nav>

                <nav className="tp-h2" >
                    <p>A Community-base website 
                    <br/> that allows users t transact with in a
                     <br/> Trusted Community </p>
                </nav>
               
                <button className="tp-btn" >Create Account</button>
            </nav>
            <nav className="tp-img"  >
                <img className="tp-img"  src={lg} alt="DD" />
                <nav className="tp-last" ><h1>I TRUST <span style={{color:"#A00DA0"}} > YOU</span></h1></nav>
            </nav>
        </div>
    )
}

export default Nav2