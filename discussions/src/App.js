import React from "react";
import Display from "./props/functionalProps";
import DemoComponent from "./props/functionalProps";
import FunctionComponent from "./props/paramertizedProps"
import Coffee from "./props/propsObjects";
import { Store } from "./props/withoutProps";
import { StoreOne } from "./props/withoutpropswithoutvar";
import State from "./Hooks/simpleState"
import Asynchronous from './Hooks/asynchronous'
import Prop from "./props/propsVsstate";
import PropsRead from "./props/statevspropsexample";
import Parent from "./props/functionasChild";
import User from "./props/SetPropsState";

function App() {
  return (
    <div className="App">
      <DemoComponent />      
      <Display />
     <FunctionComponent />
     <Store />
     <StoreOne />
     <Coffee />
     <State />
     <Asynchronous />
     <Prop />
     <PropsRead />
     <Parent />
     <User />
     
    </div>
  );
}

export default App;