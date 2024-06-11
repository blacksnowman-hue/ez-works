import logo from "./assets/EZ Works Blue.png"
import './App.css';
import Email from "./Form.js";
import img1 from "./assets/presentation.png";
import img2 from "./assets/audio-visual.png";
import img3 from "./assets/translation.png";
import img4 from "./assets/graphic-design.png";
import img5 from "./assets/research.png";
import img6 from "./assets/data-processing.png";
import Card from "./Cards.js";
function App() {
  let dataArr=[{pic:img1,title:"Presentation Design",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"}
  ,{pic:img2,title:"Audio - Visual Production",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img3,title:"Translation Services",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img4,title:"Graphic Design",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img5,title:"Research & Analytics",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"},
  {pic:img6,title:"Data Processing",text:"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet"}]
  return (
    
    <div className="mainWrapper">

    <div className="leftWrapper">
      <div>
        <img src={logo} alt="logo" className="logo"/>
        <p className="leftText">A Suite Of Business Support Services</p>
        <div>
        <p className="mainText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
        </div>
      </div>
      <div className="email2">
      <Email/>
      </div>
      
    </div>

      <div className="cards">
        {dataArr.map((ele,idx)=>
          <Card pic={ele.pic} title={ele.title} text={ele.text}/>
        )}
      </div>
      <div className="email">
      <Email/>
      </div>
    </div>
  );
}

export default App;