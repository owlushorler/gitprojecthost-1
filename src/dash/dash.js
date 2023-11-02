import './dash.css'
import lg1 from "../images/lw.png"
import lg2 from "../images/dash1.png"
import lg3 from "../images/Business.png"
import lg4 from "../images/Doctor.png"
import lg5 from "../images/Lawyer.png"
import lg6 from "../images/Sell.png"
import lg7 from "../images/Handshake.png"
import lg8 from "../images/Giving.png"
import lg9 from "../images/amam.png"
import lg10 from "../images/Femi.png"
import lg11 from "../images/3in1.png"
import lg12 from "../images/pub.png"
import lg13 from "../images/mig.png"
import lg14 from "../images/edit.png"
import Nav from '../frame1/nav/nav'
function Dash (prop){
   const {ram}=prop
    return(
        <div >
            
            <div className='dash0'>
                <nav className="dash1" >
                    <div className='dash2' ><img src={lg1} /> My  <span style={{color:"#A00DA0", marginLeft:"10px," ,marginRight:"10px"}} > Trusted </span> Netwrk </div>

                    <div className='dash3' > <img src={lg2}/> DashBard</div>
                    <div className='dash4' > <img src={lg3}/> Business Expert</div>
                    <div className='dash4' > <img src={lg4}/> Trust Doctor</div>
                    <div className='dash4' > <img src={lg5}/> Trust Lawyer</div>
                    <div className='dash4' > <img src={lg6}/> Trust Market</div>
                    <div className='dash4' > <img src={lg7}/> Trust Deal</div>
                    <div className='dash4' > <img src={lg8}/> Trust Aid</div>
                    <div className='dash4' > <img src={lg9} onClick={()=>ram(true)}/> Login</div>
                </nav>


                <nav>
                    <div className='dash5' >
                        <nav><p style={{fontSize:"24px"}} >Welcme Back</p>
                        <h3 style={{fontSize:"36px"}}  >Sophia Amaka</h3></nav>
                        <nav>
                            <input style={{fontSize:"30px",height:"70px", background:"#D9D9D9", borderRadius:"20px"}} type='text' placeholder='search' />
                        </nav>
                    </div>

                    <div>
                    <img style={{width:"960px", margin:"10px"}} src={lg10}/>
                    </div>

                    <div>
                        <nav style={{display:'flex', justifyContent:"space-between", margin:"20px"}} >
                            <h4 style={{fontSize:"32px"}} >Create new post</h4>
                            <h3 style={{fontSize:"32px"}} >...</h3>
                            

                        </nav>
                        <nav >
                            <input style={{width:"950px",margin:"10px", height:"150px",border:"none", background:"#D9D9D9",fontSize:"32px"}} type='text' placeholder='what on your mind' />
                        </nav>
                        <nav style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"25px"}}>
                            <img src={lg11} />
                            <img src={lg12} />
                        </nav>
                    </div>
                    <div>
                        <img style={{marginTop:"30px"}} src={lg13} />
                    </div>
                    <div>
                    <img style={{marginTop:"30px"}} src={lg14} />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Dash