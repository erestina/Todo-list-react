import React from "react";
import { connect } from "react-redux";
import { addTodo, addText } from "../redux/action/addTodo.action";
const InputField = ({ addText, text, selected, addTodo }) => {
  const handleChange = e => addText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (!selected || selected === 0)
      addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={text}
        placeholder="Enter your todo..."
        onChange={handleChange}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
});
const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
