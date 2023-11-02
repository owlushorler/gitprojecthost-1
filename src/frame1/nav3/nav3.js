import lg from "../../images/man.png"
import lg1 from "../../images/man1.png"
import lg2 from "../../images/man3.png"
import lg3 from "../../images/man4.png"
import lg4 from "../../images/ww.png"
import lg5 from "../../images/www.png"
import lg6 from "../../images/cat.png"
import "./nav3.css"
function Nav3 (){

    const data = [{
        img:lg,
        cm:"Community Services",
    
        btn:"Join community",
        
    },
    {
        img:lg1,
        cm:"Medical Services",
        
        btn:"learn More",
        
    },{
        img:lg2,
        cm:"Business Service",
    
        btn:"learn More",
        
    },{
        img:lg3,
        cm:"Legal Service",
        btn:"learn More",
        
    }]

    return(
        <div>
          
          
            <nav className="nav3-head" >What <span style={{color: "#A00BAB"}} >We</span>  Offer </nav>
        <div  className="nav3-map" >
        
         {data.map(ele=>{
            return(
                
          
          <nav className="nav3-bx" >
            <nav className="nav3-img" >
                <img src={ele.img}/>
            </nav>
            
            <nav className="nav3-cm" > {ele.cm} </nav>
            
            <nav className="nav3-pa" >Lorem Ipsum is simply dummy
                 text <br/> of the printing and typesetting
                  industry.<br/> Lorem Ipsum has been the 
                  's standard <br/>
            </nav>
            <nav>
                <button className="nav3-btn" > {ele.btn}</button>
            </nav>
            </nav>   )
         })}
         </div>

         <div>
            <div className="tes" >Testimonials</div>
            <div className="test">
                    <nav className="test-cen" >
                        <img src={lg4} />
                       <p> Lorem Ipsum is simply dummy
                 text <br/> of the printing and typesetting
                  industry.<br/> Lorem Ipsum has been the 
                  's standard <br/></p>

                  <h3>GKE.A</h3>
                  
                    </nav>


                    <nav className="test-arrw">
                    <img className="test-arrw" src={lg6} />
                    </nav>

                    <nav className="test-cen" >
                        <img src={lg5} />
                       <p> Lorem Ipsum is simply dummy
                 text <br/> of the printing and typesetting
                  industry.<br/> Lorem Ipsum has been the 
                  's standard <br/></p>

                  <h3>ANITA MELDY</h3>
                  
                    </nav>
            </div>
            


         </div>





        </div>
    )
}

export default Nav3