import React, { Component } from 'react'

class Question extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Questions"
        ),
        React.createElement(question, { items: this.state.items }),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "label",
            { htmlFor: "new-todo" },
            "What is your favorite dog breed?"
          ),
          React.createElement("input", {
            id: "new-todo",
            onChange: this.handleChange,
            value: this.state.text
          }),
          React.createElement(
            "button",
            null,
            "Add #",
            this.state.items.length + 1
          )
        )
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  

  class question extends React.Component {
    render() {
      return React.createElement(
        "ul",
        null,
        this.props.items.map(item => React.createElement(
          "li",
          { key: item.id },
          item.text
        ))
      );
    }
}
  
export default Question;
//   ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('todos-example'));