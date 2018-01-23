import React from 'react'
// component to write ingredients list elements
class Recipe extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let index = this.props.index;
    let recipe = this.props.recipe;
    let lists = recipe.ingredients.map((ingredient, i)=>{
      return(
      <li key={i+ingredient} className="list-group-item">{ingredient}</li>
      );
    });
    return (
      <ul className="list-group">
  <li key={this.props.recipe.name} className="list-group-item list-group-item-info">{this.props.recipe.name}</li>
        {lists}
    </ul>
    );
  }
}
