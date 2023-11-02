import lg from "../../images/Frame 8.png"
import lg1 from "../../images/Rectangle 13.png"
import lg2 from "../../images/Frame 9 (1).png"
import lg3 from "../../images/Frame 11 (1).png"
import lg4 from "../../images/ppp.png"
import "./abut1.css"
import Fter from "../../f/footer"
function Abut1 (){
    return(
        <div  >
            <div>
                <img style={{width:"1280px"}} src={lg} />
            </div>

            <div className="abut-2" >
                <nav>
                <h1 className="abut-h" >About Us</h1>
                <p className="abut-pa">
                Lorem ipsum dolor sit amet consectetur. Ut at sed tempus leo condimentum eu congue ut. Vitae neque accumsan in quis vel tincidunt eget mi vitae. Scelerisque neque viverra tempor neque malesuada pharetra. Sed congue mauris id dictum hac arcu eget faucibus. Enim est aliquet mi nibh at. Mattis lectus nibh viverra at urna.
                
                
                <br/>
                
                 Lorem ipsum dolor sit amet consectetur. Ut at sed tempus leo condimentum eu congue ut. Vitae neque accumsan in quis vel tincidunt eget mi vitae. Scelerisque neque viverra tempor neque malesuada pharetra. Sed congue mauris id dictum hac arcu eget faucibus. Enim est aliquet mi nibh at. Mattis lectus nibh viverra at urna.
                </p>
                </nav>
                <nav>
                <img style={{width:"550px", height:"500px", margin:"50px"}} src={lg1} />
                </nav>
            </div>

            <div className="abut-3" >  
            <img src={lg2} />
            <img src={lg3} />
            </div>

            <h1 className="abut-4"> OUR <span style={{color:"blue"}} > VALUE </span></h1>
            <img style={{width:"97vw"}} src={lg4} />
            
            <div className="abut-111">
                <h1 style={{fonttSize:"40px"}} >GET IN TOUCH</h1>
                <h5 className="abut-70" >Leave us a message</h5>
                <div className="abut-55">
                    <div className="abut-10" >
                     <lebel className="abut-70">name</lebel>
                     <input style={{width:"600px", height:"80px"}} />
                     <lebel className="abut-70">Email Address</lebel>
                     <input style={{width:"600px", height:"80px"}}/>
                     <lebel className="abut-70">message</lebel>
                     <textarea style={{width:"600px", height:"200px"}} />
                 </div>
                 <button className="abut-btn" >send</button>
                 </div>
                
            </div>
            <Fter/>
        </div>
    )
}
export default Abut1