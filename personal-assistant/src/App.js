import React, {useState, useEffect} from 'react'; 
import {IconContext} from 'react-icons'; 
import { FaFacebook, FaFacebookSquare, FaStickyNote} from 'react-icons/fa'; 
import {MdEmail} from 'react-icons/md'; 
import Add from './Add'; 
import Todo from './Todo'; 
import Forecast from './Forecast'; 
import Header from './Header'; 
import News from './News'; 
import './main.css'; 



const App = () => {
  
  const [todos, addTodo] = useState([]); 

  function add(name){
    addTodo([...todos, name]);  
  }

  function remove(id){
    addTodo(todos.filter(rem => rem.id !== id )); 
  }

  return(
    <div>
      <header>
        <div className = "hamburger">
          <p className = "bar"></p>
          <p className = "bar"></p>
          <p className = "bar"></p>
        </div>
        <input placeholder = "Search"></input>
      </header>
      <div style = {{display: "flex",
                     justifyContent: "center", 
                     margin: "auto", 
                     flexWrap: "wrap"}}>
        <div className = "container vcenter">
            <div className = "row card">
              <Header/>
            </div>
            <div className = "card">
              <Add addTodo = {add}/>
              <h3>Todo List:</h3>
              {todos.length === 0 ? <h5>Nothing to do!</h5> : todos.map((name, index) => {
                    return <Todo remove = {remove} key = {index} {...name}/>
                  })}
            </div>
        </div>
        <div className = "container ">
          <div className = "card">
            <Forecast latitude={42.3736} longitude={-71.1097} name='Cambridge' />
            <div className = "dots">
              <span style = {{backgroundColor: "#4285F4"}}className = "dot"></span>
              <span style = {{backgroundColor: "#DB4437"}} className = "dot"></span>
              <span style = {{backgroundColor: "#F4B400"}} className = "dot"></span>
              <span style = {{backgroundColor: "#0F9D58"}} className = "dot"></span>
            </div>

            <div className = "icons dots">
              <a href = "https://www.facebook.com/">
                <IconContext.Provider value={{ color: "#4267B2", className: "icon", size: "2em" }}>
                  <div>
                    <FaFacebookSquare />
                  </div>
                </IconContext.Provider>
              </a>
              <a href = "https://mail.google.com/mail/u/1/#inbox">
                <IconContext.Provider value={{ color: "#D44638", className: "icon", size: "2em" }}>
                  <div>
                    <FaStickyNote />
                  </div>
                </IconContext.Provider>
              </a>
            </div>
          </div>
           <div className = "card">
                <News/>

           </div>

        </div>
        
      </div>
    </div>
  ); 
}

export default App
