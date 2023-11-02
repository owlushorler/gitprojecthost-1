import Frame1 from "./frame1/fame1";
import Fter from "./f/footer";
import Abut1 from "./abut/abut1/abut1";
import Nav from "./frame1/nav/nav";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Create from "./create/create";
import Sign from "./sign/sign";
import Dash from "./dash/dash";
function App() {
  return (
    <BrowserRouter>
   
    <Nav/>
    <Routes>
      
      <Route path="/" element={<Frame1/>}/>
      {/* <Frame1/> */}
      <Route path="abut" element={ <Abut1/>}/> 
      <Route path="create" element={ <Create/>}/> 
      <Route path="sign" element={ <Sign/>}/> 
      <Route path="dash" element={ <Dash/>}/> 
      {/* <Abut1/>
       */}
    
      </Routes>
      {/* <Fter/> */}
      {/* <Sign/> */}
      
    </BrowserRouter>
  );
}

export default App;
