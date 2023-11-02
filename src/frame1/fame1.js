import Nav from "./nav/nav";
import Nav2 from "./nav2/nav2";
import Nav3 from "./nav3/nav3";
import Fter from "../f/footer";
function Frame1(){
    return(
        <div>
        <div className="frame" >
            {/* <Nav/> */}
            <Nav2/>
            <Nav3/>
            
        </div>
        <Fter/>
        </div>
    )
}

export default Frame1