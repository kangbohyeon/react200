import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ImportConponent from '../example/R003_ImportConponent';
import LifecycleEx from '../example/R004_LifecycleEx'
import LifecycleEx2 from '../example/R005_LifecycleEx';
import LifecycleEx3 from '../example/R006_LifecycleEx';
import LifecycleEx4 from '../example/R007_LifecycleEx';
import LifecycleEx5 from '../example/R008_LifecycleEx';
import Es6 from '../example/R009_LifecycleEx';
import Variable from '../example/R010_Variable';
import SpreadOperator from '../example/R011_SpreadOperator';
import ClassPrototype from '../example/R012_Class&Prototype';
import ArrowFunction from '../example/R013_ArrowFunction';
import ForEach from '../example/R014_ForEach';
import Map from '../example/R015_Map';
import Jquery from '../example/R016_Jquery';
import Props from '../example/R017_Props';
import PropsDatatype from '../example/R018_PropsDatatype';
import PropsBoolean from '../example/R019_PropsBoolean';
import PropsObjVal from '../example/R020_PropsObjVal';
import PropsRequired from '../example/R021_PropsRequired';
import PropsDefault from '../example/R022_PropsDefault';
import PropsNode from '../example/R023_PropsNode';
import ReactState from '../example/R024_ReactState';
import SetState from '../example/R025_SetState';
import ForceUpdate from '../example/R026_ForceUpdate';
import ComponentClass from '../example/R027_ComponentClass';
import PureComponentClass from '../example/R028_PureComponentClass';
import ShallowEqual from '../example/R029_ShallowEqual';
import FunctionComponent from '../example/R030_FunctionComponent';
import ReactHook from '../example/R031_ReactHook';
import Fragments from '../example/R032_Fragments';
import ReturnMap from '../example/R033_ReturnMap';
import ReactstrapAlerts from '../example/R034_ReactstrapAlerts';
import ReactstrapBadges from '../example/R035_ReactstrapBadges';
import ReactstrapBreadcrumbs from '../example/R036_ReactstrapBreadcrubms';
import ReactstrapDropdown from '../example/R037_ReactstrapDropdown';
import ReactstrapButtonGroup from '../example/R038_ReactstrapButtonGroup';
import ReactstrapBottons from '../example/R039_ReactstrapBottons';
import ReactstrapCard from '../example/R040_reactstrapCard';
import ReactstrapCarousel from '../example/R041_ReactstrapCarousel';
import ReactstrapCollapse from '../example/R042_ReactstrapCollapse';
import ReactstrapFade from '../example/R043_ReactstrapFade';
import ReactstrapForm from '../example/R044_ReactstrapForm';
import InputGroup from '../example/R045_ReactstrapInputGroup';
import ReactstrapJumbotron from '../example/R046_ReactstrapJumbotron';
import ListGroup from '../example/R047_ReactstrapListGroup';
import Modal from '../example/R048_ReactstrapModal';
import Navbar from '../example/R049_ReactstrapNavbar';
import Pagination from '../example/R050_ReactstrapPagination';
import Popover from '../example/R051_ReactstrapPopover';
import Progress from '../example/R052_ReactstrapProgress';
import Spinner from '../example/R053_ReactstrapSpinner';
import Table from '../example/R054_ReactstrapTable';
import Tab from '../example/R055_ReactstrapTab';
import Sweetalert2Basic from '../example/R056_Sweetalert2Basic';
import Sweetalert2Position from '../example/R057_Sweetalert2Position';
import Sweetalert2Confirm from '../example/R058_Sweetalert2Confirm';
import FetchGet from '../example/R059_FetchGet';
import FetchPost from '../example/R060_FetchPost';
import AxiosGet from '../example/R061_AxiosGet';
import AxiosPost from '../example/R062_AxiosPost';
import CallbackFunc from '../example/R063_CallbackFunc';
import Promise from '../example/R064_Promise';
import Promisecatch from '../example/R065_Promisecatch';
import ReactonClick from '../example/R066_onClick';
import ReactonChange from '../example/R067_onChange';
import ReactonMouseMove from '../example/R068_onMouseMove';
import ReactonMouseOver from '../example/R069_onMouseOver';
import ReactonMouseOut from '../example/R070_onMouseOut';
import ReactOnKey from '../example/R071_OnKey';
import ReactonSubmit from '../example/R072_onSubmit';
import ReactRef from '../example/R073_ReactRef';
import ReactCurrying from '../example/R074_ReactCurrying';
import ReactHoc from '../example/Hoc/R075_ReactHoc';
import ContextApi from '../example/Context/R076_ContextApi';
import R077_ContextApi from '../example/Context/R077_ContextApi';
import StrAddButton from '../example/R078_StrAddButton';
import { connect } from 'react-redux';
import R081_StrAddButton from '../example/R081_StrAddButton';
import CookieSave from '../example/R085_cookiesSave';
import CookieLoad from '../example/R086_cookieLoad';
import CookieRemove from '../example/R087_cookieRemove';
import { Route } from 'react-router-dom';
import reactRouter from './R089_reactRouter';
import reactRouter2 from './R089_reactRouter2';
import reactRouter3 from './R090_reactRouter';
import '../css/new.css';
import HeaderAdmin from './Header/Header admin';
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import reactDebounce from './R094_reactDebounce';
import reactThrottle from './R095_reactThrottle';
import floatingPopulationList from './Floating_population/floatingPopulationList';
import rechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart';
import floatingPopulationListChart from './Floating_population/floatingPopulationListChart';
import floatingPopulationAreaChart from './Floating_population/floatingPopulationAreaChart';
import floatingPopulationBarChart from './Floating_population/floatingPopulationBarChart';
import floatingPopulationComposedChart from './Floating_population/floatingPopulationComposedChart';
import floatingPopulationScatterChart from './Floating_population/floatingPopulationScatterChart';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderAdmin />
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/Debounce' component={reactDebounce} />
        <Route exact path='/Throttle' component={reactThrottle} />
        <Route exact path='/floatingPopulationList' component={floatingPopulationList} />
        <Route exact path='/rechartsSimpleLineChart' component={rechartsSimpleLineChart} />
        <Route exact path='/floatingPopulationListChart' component={floatingPopulationListChart} />
        <Route exact path='/floatingPopulationAreaChart' component={floatingPopulationAreaChart} />
        <Route exact path='/floatingPopulationBarChart' component={floatingPopulationBarChart} />
        <Route exact path='/floatingPopulationComposedChart' component={floatingPopulationComposedChart} />
        <Route exact path='/floatingPopulationScatterChart' component={floatingPopulationScatterChart} />
        {/* <Route exact path='/reactRouter2' component={reactRouter2} /> */}
        {/* <Route exact path='/reactRouter3' component={reactRouter3} /> */}
        <Footer />
      </div>
    );
  }
}


// function App(){
//   return(
//     <div>
//       <h1>Start React 200!</h1>
//       <CookieRemove/>
//       {/* <CookieLoad/> */}
//       {/* <CookieSave/> */}
//     </div>
//   );
// }
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Start React 200!</h1>
//         {/* <span>{this.props.store.getState().data.str}</span><br/> */}
//         <span>{this.props.str}</span><br />
//         {/* <StrAddButton store={this.props.store}/> */}
//         <R081_StrAddButton AppProp="200" />
//       </div>
//     );
//   }
// }
// let mapStateToProps = (state, props) => {
//   console.log('Props from indes.js : ' + props.indexProp)
//   return {
//     str: state.data.str,
//   };
// };
// App = connect(mapStateToProps, null)(App);

// function App() {
//   return (
//     <div>
//       <h1>Start React 200!</h1>
//       <p>CSS 적용하기</p>
//       <R077_ContextApi/>
//       {/* <ContextApi /> */}
//       {/* <ReactHoc name='React200'/> */}
//       {/* <ReactCurrying/> */}
//       {/* <ReactRef/> */}
//       {/* <ReactonSubmit/> */}
//       {/* <ReactOnKey/> */}
//       {/* <ReactonMouseOut/> */}
//       {/* <ReactonMouseOver/> */}
//       {/* <ReactonMouseMove/> */}
//       {/* <ReactonChange/> */}
//       {/* <ReactonClick/> */}
//       {/* <Promisecatch/> */}
//       {/* <Promise/> */}
//       {/* <CallbackFunc/> */}
//       {/* <AxiosPost/> */}
//       {/* <AxiosGet/> */}
//       {/* <FetchPost/> */}
//       {/* <FetchGet/> */}
//       {/* <Sweetalert2Confirm/> */}
//       {/* <Sweetalert2Position/> */}
//       {/* <Sweetalert2Basic/> */}
//       {/* <Tab/> */}
//       {/* <Table /> */}
//       {/* <Spinner/> */}
//       {/* <Progress/> */}
//       {/* <Popover/> */}
//       {/* <Pagination/> */}
//       {/* <Navbar/> */}
//       {/* <Modal/> */}
//       {/* <ListGroup/> */}
//       {/* <ReactstrapJumbotron/> */}
//       {/* <InputGroup/> */}
//       {/* <ReactstrapForm/> */}
//       {/* <ReactstrapFade/> */}
//       {/* <ReactstrapCollapse/> */}
//       {/* <ReactstrapCarousel/> */}
//       {/* <ReactstrapCard/> */}
//       {/* <ReactstrapBottons/> */}
//       {/* <ReactstrapButtonGroup/> */}
//       {/* <ReactstrapDropdown/> */}
//       {/* <ReactstrapBreadcrumbs/> */}
//       {/* <ReactstrapBadges /> */}
//       {/* <ReactstrapAlerts/> */}
//       {/* <ReturnMap/> */}
//       {/* <Fragments/> */}
//       {/* <ReactHook content={'abc'} /> */}
//       {/* <FunctionComponent contents="[this is functioncomponent ]"/> */}
//       {/* <ShallowEqual/> */}
//       {/* <PureComponentClass/> */}
//       {/* <ForceUpdate/> */}
//       {/* <ComponentClass/> */}
//       {/* <SetState/> */}
//       {/* <ImportConponent></ImportConponent> */}
//       {/* <LifecycleEx></LifecycleEx> */}
//       {/* <LifecycleEx2></LifecycleEx2> */}
//       {/* <LifecycleEx5 prop_value = 'FromApp.js'/> */}
//       {/* <Es6/> */}
//       {/* <Variable/> */}
//       {/* <SpreadOperator/> */}
//       {/* <ClassPrototype/> */}
//       {/* <ArrowFunction/> */}
//       {/* <ForEach/> */}
//       {/* <Map/> */}
//       {/* <Jquery/> */}
//       {/* <Props props_val="THIS IS PROPS"/> */}
//       {/* <PropsDatatype 
//       String = "react"
//       Number={200}
//       Boolean={1==1}
//       Array={[0,1,8]}
//       Object ={{react:"리액트", twohundred:"200"}}
//       Function={console.log("FunctionProps: function!")}
//       /> */}
//       {/* <PropsBoolean BooleanTrueFalse ={false}/>
//       <PropsBoolean BooleanTrueFalse/> */}
//       {/* <PropsObjVal Object ={{react:"리액트",twohundred:"200"}}/> */}
//       {/* <PropsDefault ReactNumber={200}/> */}
//       {/* <PropsNode>
//         <span>node from App.js</span>
//       </PropsNode> */}
//       {/* <ReactState reactString={"react"}/> */}
//     </div>
//   );
// }

export default App;
