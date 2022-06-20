import Greet from "./1.components/1.function/Greet";
import { GreetNamed as Scott } from "./1.components/1.function/GreetNamed";
import { GreetNamedOne } from "./1.components/1.function/GreetNamedOne";
import GreetOne from "./1.components/1.function/GreetOne";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import LifeCycleA from "./10.life-cycle/LifeCycleA";
import CommentsAPI from "./11.ajax-calls/CommentsAPI";
import PostAPI from "./11.ajax-calls/PostAPI";
import StudentMongoAPI from "./11.ajax-calls/StudentMongoAPI";
import StudentSQLAPI from "./11.ajax-calls/StudentSQLAPI";
import UserAPI from "./11.ajax-calls/UserAPI";
import Routing from "./12.routing/Routing";
import ClassCounter from "./13.react-hooks/ClassCounter";
import HookCounter from "./13.react-hooks/HookCounter";
import HookWithObject from "./13.react-hooks/HookWithObject";
import UseEffectHook from "./13.react-hooks/UseEffectHook";
import UseRefHook from "./13.react-hooks/UseRefHook";
import Hello from "./2.jsx/Hello";
import HelloOne from "./2.jsx/HelloOne";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import Notify from "./4.state/Notify";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.conditional-rendering/UserGreeting";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFive from "./7.list-rendering/NameListFive";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import AppStyles from "./8.styling/AppStyles";
import Inline from "./8.styling/Inline";
import StyleSheet from "./8.styling/StyleSheet";
import StudentForm from "./9.form-handling/StudentForm";

function App() {

  function getMessage(){
    return "Welcome to props"
  }
  return (
    <div className="container">
      <UseRefHook />
      {/* <UseEffectHook /> */}
      {/* <HookWithObject /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <Routing /> */}
      {/* <StudentMongoAPI /> */}
      {/* <StudentSQLAPI /> */}
      {/* <UserAPI /> */}
      {/* <CommentsAPI /> */}
      {/* <PostAPI /> */}
      {/* <LifeCycleA /> */}
      {/* <StudentForm /> */}
      {/* <AppStyles /> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <NameListFive /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <NameList /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> <br />
      <ClassClick /> */}
      {/* <Notify /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greeting id={1} 
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
      </GreetingOne> */}
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
