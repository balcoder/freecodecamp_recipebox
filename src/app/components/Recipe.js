import React from 'react'
import { render } from "react-dom";
// component to write ingredients list elements
export class Recipe extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let index = this.props.index;
    let recipe = this.props.recipe;
    let lists = recipe.ingredients.map((ingredient, i)=>{    
      return(
      <li key={ingredient + i} className="list-group-item">{ingredient}</li>
      );
    });
    return (
      <ul className="list-group">
        {lists}
    </ul>
    );
  }
}
