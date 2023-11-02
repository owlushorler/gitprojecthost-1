import lg from "../../images/lg.png"
import { Link } from "react-router-dom"
import "./nav.css"
function Nav (){
    return(
        <div className="nav" >
            <nav>
               <img className="img" src={lg} alt="lg"/>
            </nav>
            
                <ul className="nav-list">
                    <li> <Link style={{textDecoration:"none"}} to ="/abut" >  ABOUT US</Link></li>
                    <li  > <Link style={{textDecoration:"none"}} to ="/" >  WHAT WE OFFER</Link> </li>
                    <li>BLOG</li>
                    <li>FAXs</li>
                </ul>
            
            <nav>
            <Link style={{textDecoration:"none", color:"white"}} to ="sign" >  <button className="nav-btn1">Sign in</button></Link>
                <Link style={{textDecoration:"none", color:"white"}} to ="create" ><button className="nav-btn2"> Create Accunt</button></Link>
            </nav>
            <nav></nav>
            
        </div>
    )
}

export default Nav
