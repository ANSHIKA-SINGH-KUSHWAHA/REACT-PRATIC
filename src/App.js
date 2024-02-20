//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

/*function App() 
{
  let FristVariable = 5
  console.log("FristVariable:"+FristVariable)
  FristVariable=6
  console.log("FristVariable:"+FristVariable)

const SecondVariable ="abc"
console.log("SecondVariable:"+SecondVariable)

var thridVariable = true
console.log("thirdVariable:"+thridVariable)


const FunctionArgument = () =>
{
  console.log ("This is my function 11!!")
  return false
}

const myFunction = (variable) =>{ 
console.log ("This is my function11!!")
if(variable())
{
  console.log(" the condition is true")
}
else
{
  console.log("the condition is false")
}
}
myFunction(FunctionArgument)

class Student
{
  id 
  name
  rollNumber
  address
  emailID

  constructor(id,tempName,tempRoll,tempAddress,tempEmail)
  {
    this.id=id
    this.name=tempName
    this.rollNumber=tempRoll
    this.address=tempAddress
    this.emailID=tempEmail
  }

  print()
  {
    console.log("id",this.id)
    console.log("id",this.name)
    console.log("id",this.rollNumber)
    console.log("id",this.address)
    console.log("id",this.emailID)
  }
}

const student  = new Student (123,"Anshika",111,"Indore","asfggdeugjdgdeug")
student.print()

class Monitor extends Student
{
  batch
  constructor(batchTemp,id,tempName,tempRoll,tempAddress,tempEmail)
  {
    super(id,tempName,tempRoll,tempAddress,tempEmail)
    this.batch=batchTemp
  }

  print()
  {
    super.print()
    console.log("Batch"+this.batch)
  }
}

let anshika= new Monitor("2-3pm",232,"Anshika Singh Kushwaha",2345,"wsegrfdtjgfsv","anshika@gmail.com")
console.log("anshika",anshika)
anshika.print()

let variable =<div>Hello world,how are you?</div>

  return (
 {<div>Hello World!!{FristVariable}<br/br>{variable}</div> }
    );
}*/
 //class compent
 
// {
 // render()
 // {
   // return React.createElement
    // (
     // "div",
    //  null,
    //  React.createElement("p", null, "This is simple react element"),
    //  React.createElement("ul", null,),
    //  React.createElement("li", null, "list item 1"),
     // React.createElement("li", null, "list item 2"),
    //  React.createElement("li", null, "list item 3"),
   //  )
    //  }
    //  }
  //   class App extends React.Component 
  //  {
  //   buttonClickHandle() 
  //   {
  //     console.log("Clicked the button!!!")
  //     console.log(this.buttonClickHandle)
  //   }
  //     render()
  //     {
  //     return  <div>
  //       <p>
  //         <ul>
  //           <li>List 1</li>
  //           <li>List 2</li>
  //           <li>List 3</li>
  //         </ul>
  //         <button onClick={() => this.buttonClickHandle}> disabled="true" Click me!</button>
  //       </p>
  //      </div>
  //      }
  //  }
  
//const App =(props) =>
//{
 // console.log("props:",props)
//  console.log("props color:", props.color)// color
 // console.log("props color:",props.size) //size 
//  console.log("clicEvent:",props.clickEvent)
//  return <div style={{backgroundColor:props.color}}>
 //   This is App Component
   // <button onClick={props.clickEvent}>Click me</button>
   // </div>
//} 

class App extends React.Component
{
  state={
    counter:0,
    Component : <ChildComponent/>
  }

  constructor(props)
  {
    super(props)
    console.log("constructor of APP component")
  }

  static getDerivedStateFromProps()
  {
    console.log("getDerivedStateFromProps")
  }

  incrementCounter = () =>
  {
    this.setState({counter:this.state.counter + 1})
  }

  componentDidMount()
  {
    console.log("componentDidMount")
  }

  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate")
    //return false
    return true
  }

  getSnapshotBeforeUpdate(prvePops,prveState)
  {
    console.log(" getSnapshotBeforeUpdate")
    return true
  }

  componentDidUpdate()
  {
    console.log(" componentDidUpdate")
  }
  
  

    //color "orange"

    unmountChild = () =>
    {
      this.setState({
        counter:this.state.counter,
        component : "The child compent is gone/unmounted"

      }) 
    }

  render()
  {
   // console.log(this.props.color)
   console.log("render method")

    return<div style={{ backgroundColor:this.props.color}}>
        Hello
        < button onClick={this.props.clickEvent}>Click me</button><br/>

        -------------------------<br/>

        Counter: { this.state.counter}
        <button onClick={this.incrementCounter}>Increment counter</button>
        <br/>
        Mounting Child component <br/>
        ------------------------------<br/>
       {/* <ChildComponent/><br/>*/}
       {this.state.component}
        ------------------------------<br/>
        <button onClick={this.unmountChild}>Unmount Child Component</button>
       </div>
  }
}

class ChildComponent extends React.Component
{
  componentWillUnmount()
  {
    console.log("Unmounting Child component")
  }
  render()
  {
    return<div> This is my Child Component</div>
  }
}
export default App;