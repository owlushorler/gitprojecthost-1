import lg from "../images/lg.png"
import lg1 from "../images/Vector.png"
import lg2 from "../images/Vector (1).png"
import lg3 from "../images/Vector (2).png"
import lg4 from "../images/Frame 2.png"
import lg5 from "../images/Frame 3.png"
import "./footer.css"
function Fter(){
    return(
        <div className="fter" >
            <nav className="fter-1">
                <div>
                    <img style={{width:"150px", height:"171px"}} src={lg} />
                    <h1 className="cnt" >CONTACT</h1>
                    <p className="parag" >+23480644443333</p>
                    <button className="fter-btn" >Contact us</button>
                </div>
                <div>
                    <h1 className="cnt" >COMPANY</h1>
                    <h3 className="parag" >About us</h3>
                    <h3 className="parag" >FAQs</h3>
                    <h3 className="parag" >Gellery</h3>
                </div>
                <div>
                <h1 className="cnt" >PRDUCTS</h1>
                    <h3 className="parag"  >community</h3>
                    <h3 className="parag" >Business Expert</h3>
                    <h3 className="parag" >Trust Lawyer</h3>
                    <h3 className="parag" >Trust Doctor</h3>

                </div>
                <div>
                <h1 className="cnt" >FOLLOW US</h1>
                    <h3 className="parag" ><img style={{background:"blue", borderRadius:"10px"}} src={lg1} /> facebook</h3>
                    <h3 className="parag"  ><img style={{background:"magenta",borderRadius:"10px" }} src={lg2} />instagram</h3>
                    <h3 className="parag" ><img style={{background:"blue", borderRadius:"10px"}} src={lg3} />Join Our telegram</h3>
                    
                </div>
            </nav>

            <nav className="fter-2">
                <div >
                    <h1 className="cnt" >OFFICE ADDRESS</h1>
                    <p className="parag" >THE ENTRENUERSHIP VILLAGE ,
                    parliament <br/> rad, beside shprie, ppsitr internatinal
                    <br/> cnfreance center, Akure, nd State, Nigeria
                    </p>
                </div>
                <div>
                <h1 className="cnt" >PRIVACY</h1>
                    <h3 className="parag" >bye-law</h3>
                    <h3 className="parag" >privacy</h3>
                    <h3 className="parag" >terms and cnditin</h3>
                    
                </div>
            </nav>
            <nav className="fter-b"   >
            <img  src={lg4} />
            <img src={lg5} />
            </nav>
        </div>
    )
}

export default Fter