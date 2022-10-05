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
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <ImportConponent></ImportConponent> */}
      {/* <LifecycleEx></LifecycleEx> */}
      {/* <LifecycleEx2></LifecycleEx2> */}
      {/* <LifecycleEx5 prop_value = 'FromApp.js'/> */}
      {/* <Es6/> */}
      {/* <Variable/> */}
      <SpreadOperator/>
    </div>
  );
}

export default App;
