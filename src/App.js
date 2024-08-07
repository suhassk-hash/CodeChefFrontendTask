import './App.css';
import logo from './Frame.png';
function App() {

  function click(event){
    event.preventDefault();
    const message=document.getElementById("TextBox").value
    const newdiv=document.createElement("div")
    newdiv.className="sMessage";
    const text=document.createElement("p")
    text.className="Text"
    text.textContent=message;
    const msg=document.getElementById("Message-Content")
    newdiv.appendChild(text);
    let time=new Date().toLocaleTimeString( [],{hour:"2-digit",minute:"2-digit",hour12:true}).toUpperCase();
    const timetext=document.createElement("p")
    timetext.innerText=time
    timetext.className="Time"
    timetext.id="right"
    msg.appendChild(newdiv);
    msg.appendChild(timetext).scrollIntoView()
    document.getElementById("TextBox").value = "";
  }



  return (
      <div className="App">
        <div className="Left-Block"></div>
        <div className="Right-Block">
          <div className="Header">
            <h5>23BAI1148</h5>
          </div>
          <div className="Message-Wrap" id="Message-Content">

            <div className="rMessage">
              <p className="Text"> This is a received message</p>
            </div>
            <p className="Time" id="left">02:58AM</p>
            <div className="sMessage">
              <p className="Text"> This is a sent message</p>
            </div>
            <p className="Time" id="right">02:59AM</p>
          </div>
          <div className="Message-Block">
            <form style={{display: 'flex', width: '100%', margin: 0}} onSubmit={click} >
              <input type="text" className="TextInputBox" placeholder="Type your message..." id="TextBox" />
              <button type="submit" id="submit"><img src={logo} alt="Logo" width="20px"/></button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;