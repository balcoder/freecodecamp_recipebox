import React from 'react';
import { render } from "react-dom";

//form for inputting new recipes
export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [
        {"name": "",
        "ingredients": []
        }
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIngred = this.handleChangeIngred.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({recipe[0].name: event.target.value});
  }
  handleChangeIngred(event) {

    this.setState({recipe[0].ingredients: event.target.value.split(",")});
  }

  handleSubmit(event) {
    let newRecipe = this.state;
    this.props.update(newRecipe);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />
          </label>
        <label>
          Ingredients:<br/>
          <textarea value={this.state.ingredientsValue} onChange={this.handleChangeIngred} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
