import ReactDOM from 'react-dom';
function Tick(){
  const element = (
    <div>
      <h3>Hello World!</h3>
      <h3> Today's date is : {new Date().toLocaleDateString()}.</h3>
      <h3> And the time is : {new Date().toLocaleTimeString()}.</h3>  
      <h2> The day of the week is :{new Date().getDay()}.</h2>
      <h2> Tht month is : {new Date().getMonth()}</h2> 
      </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(Tick, 1000) //Callback function <== a function which calls another function
//Here, setInterval() //
function App() {
  return (
    <div>     
     <center><h2>Hello to the world from React.Js</h2> </center>      
    </div>
  );
}
function Clock(props){
  return(
    <div>
      <h1>My name is Clock</h1>
      <h2>Today's date is : {props.date.toLocaleDateString()}</h2>
      <h2> the time is: {props.date.toLocaleTimeString()}</h2>
      <h2> the day is : {props.date.getDay()}</h2>
    </div>
  );
}
function checkclock(){
  ReactDOM.render(<Clock date = {new Date()} />,document.getElementById('root'));
}
setInterval(checkclock, 1000);
function Appl(){
  return(
    <div>
      <Clock />
    </div>

  );
}
ReactDOM.render(<Appl />, document.getElementById('root'));
export default App

