import React from 'react';
import { render } from "react-dom";
import {Recipe} from './Recipe'
import { EditModal } from './EditModal'
// produce a list of recipes in a bootstrap card
export class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editRecipe: {
        name: "",
        ingredients: []
      }
  }

    // bind the this contex to the updateRecipes function
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e) {
    this.props.deleteRecipe(e.target.id);
    event.preventDefault();
  }

  handleEdit(e) {
    let name = e.target.id;
    let index = this.props.recipes.findIndex(x => x.name == name );
    let recipeToEdit = this.props.recipes[index];
    console.log(recipeToEdit);
    this.setState({
      editRecipe:{
      name: recipeToEdit.name,
      ingredients: recipeToEdit.ingredients
      }
    });
    let editModal = document.getElementById('editModal');
    let myModalInstance = new Modal(editModal, options);
    myModalInstance.show();
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
      <button id={recipe.name} className="btn btn-link" onClick={this.handleEdit} >Edit</button>
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
        <div>
        <EditModal recipe = {this.state.editRecipe}
          />
        </div>
      </div>
    );
  }
}
