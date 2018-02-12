import React from 'react';
import { render } from "react-dom";
import {Recipe} from './Recipe'
// produce a list of recipes in a bootstrap card
export class Accordian extends React.Component {
  constructor(props) {
    super(props);
    // bind the this contex to the updateRecipes function
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteRecipe(e.target.id);
    event.preventDefault();
  }
  render() {
    var Cards = this.props.recipes.map((recipe, i) =>{
      return(
        <div key={recipe.name} className="card">
          <div className="card-header" id={"heading" + i}>
            <h5 className="mb-0">
              <button className="btn btn-link " data-toggle="collapse" data-target={"#collapse"+i } aria-expanded="true" aria-controls={"collapse"+i}>
          {this.props.recipes[i].name}
        </button>
             </h5>
            </div>
          <div id={"collapse"+i } className="collapse" aria-labelledby={"heading" + i} data-parent="#accordion">
            <div className="card-body">
          <Recipe index={i}
                  recipe ={recipe}
            />
        </div>
        <div className="card-body">
      <button id={recipe.name} className="btn btn-link" onClick={this.handleDelete} >Delete</button>
      <button id={recipe.name} className="btn btn-link" >Edit</button>
  </div>
      </div>
    </div>
      );
    }) ;
    return(
      <div>
        <div id="accordion">
          {Cards}
        </div>
      </div>
    );
  }
}
