import React from 'react';
import './App.css';
import ImportConponent from './example/R003_ImportConponent';
import LifecycleEx from './example/R004_LifecycleEx'
import LifecycleEx2 from './example/R005_LifecycleEx';
import LifecycleEx3 from './example/R006_LifecycleEx';
import LifecycleEx4 from './example/R007_LifecycleEx';
import LifecycleEx5 from './example/R008_LifecycleEx';
import Es6 from './example/R009_LifecycleEx';
import Variable from './example/R010_Variable';
import SpreadOperator from './example/R011_SpreadOperator';
import ClassPrototype from './example/R012_Class&Prototype';
import ArrowFunction from './example/R013_ArrowFunction';
import ForEach from './example/R014_ForEach';
import Map from './example/R015_Map';
import Jquery from './example/R016_Jquery';
import Props from './example/R017_Props';
import PropsDatatype from './example/R018_PropsDatatype';
import PropsBoolean from './example/R019_PropsBoolean';
import PropsObjVal from './example/R020_PropsObjVal';
import PropsRequired from './example/R021_PropsRequired';
import PropsDefault from './example/R022_PropsDefault';
import PropsNode from './example/R023_PropsNode';
import ReactState from './example/R024_ReactState';
import SetState from './example/R025_SetState';
import ForceUpdate from './example/R026_ForceUpdate';
import ComponentClass from './example/R027_ComponentClass';
import PureComponentClass from './example/R028_PureComponentClass';
import ShallowEqual from './example/R029_ShallowEqual';
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <PureComponentClass/> */}
      <ShallowEqual/>
      {/* <ForceUpdate/> */}
      {/* <ComponentClass/> */}
      {/* <SetState/> */}
      {/* <ImportConponent></ImportConponent> */}
      {/* <LifecycleEx></LifecycleEx> */}
      {/* <LifecycleEx2></LifecycleEx2> */}
      {/* <LifecycleEx5 prop_value = 'FromApp.js'/> */}
      {/* <Es6/> */}
      {/* <Variable/> */}
      {/* <SpreadOperator/> */}
      {/* <ClassPrototype/> */}
      {/* <ArrowFunction/> */}
      {/* <ForEach/> */}
      {/* <Map/> */}
      {/* <Jquery/> */}
      {/* <Props props_val="THIS IS PROPS"/> */}
      {/* <PropsDatatype 
      String = "react"
      Number={200}
      Boolean={1==1}
      Array={[0,1,8]}
      Object ={{react:"리액트", twohundred:"200"}}
      Function={console.log("FunctionProps: function!")}
      /> */}
      {/* <PropsBoolean BooleanTrueFalse ={false}/>
      <PropsBoolean BooleanTrueFalse/> */}
      {/* <PropsObjVal Object ={{react:"리액트",twohundred:"200"}}/> */}
      {/* <PropsDefault ReactNumber={200}/> */}
      {/* <PropsNode>
        <span>node from App.js</span>
      </PropsNode> */}
      {/* <ReactState reactString={"react"}/> */}
    </div>
  );
}

export default App;
