
import "./App.css";
import Profile from "./profile/Profile";
import sss from "./sss.jpg";

function App() {
  return (
    <div className="App">
      <Profile fullname="Senda Debbiche" adress="Tunis" bio="La vie est belle" profession="Fullstack developper">
        <img src={sss} alt="myimage" style={{width :"30%", borderRadius:"6%"}} />
      </Profile>
    </div>
  );
}

export default App;
