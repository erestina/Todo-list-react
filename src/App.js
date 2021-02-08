import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { persistTodos } from "./redux/action/addTodo.action";
import { connect } from "react-redux";
import {BrowserRouter as Router,Route, useHistory} from "react-router-dom";
import Details from './Details';



const App = ({ persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  
  
  const history = useHistory();
  const changeUrl = () => {
    history.push("/details");
  }
  return (
    <div className="App">
      <h1> My to-do list :</h1>
      <InputField />
      
    <div
        className="firstTodo">
        Create an App
    </div>
    
    <div>
      <Route path="/details" component={Details}/>
        <button class="w3-button w3-orchid w3-round-xxlarge" onClick={changeUrl}>details </button>
    </div>
      
      
      <TodosList  />
      
    </div>
  );
};
  
  
const mapDispatchToProps = dispatch => ({
  
  persistTodos: () => dispatch(persistTodos())
    }
  );

export default connect(
  null,
  mapDispatchToProps
  )
  (App);
