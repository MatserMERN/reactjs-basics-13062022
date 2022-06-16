import Greet from "./1.components/1.function/Greet";
import { GreetNamed as Scott } from "./1.components/1.function/GreetNamed";
import { GreetNamedOne } from "./1.components/1.function/GreetNamedOne";
import GreetOne from "./1.components/1.function/GreetOne";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import Hello from "./2.jsx/Hello";
import HelloOne from "./2.jsx/HelloOne";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";

function App() {

  function getMessage(){
    return "Welcome to props"
  }
  return (
    <div className="container">
      <Greeting id={1} 
                name="Scott" 
                isAdmin={true} 
                details={null}
                info={undefined}
                address={{city: "boston"}}
                getMessage={() => "Welcome to props - fat arrow"}
                skills ={["Great Boss", "Agile Specialist", "SQL"]}
      >
        <p style={{display: "inline"}}>I am a child component</p>
      </Greeting>
      <br />
      <GreetingOne id={1} 
                name="Scott" 
                isAdmin={true} 
                details={null}
                info={undefined}
                address={{city: "boston"}}
                getMessage={() => "Welcome to props - fat arrow"}
                skills ={["Great Boss", "Agile Specialist", "SQL"]}
      >
        <p style={{display: "inline"}}>I am a child component</p>
      </GreetingOne>
      {/* <Greeting name="Adam"/>
      <Greeting name="Tuan"/> */}
      {/* <HelloOne /> */}
      {/* <Hello /> */}
      {/* <Greet />
      <Scott />
      <GreetOne />
      <GreetNamedOne />
      <Welcome />
      <WelcomeOne /> */}
    </div>
  );
}

export default App;
