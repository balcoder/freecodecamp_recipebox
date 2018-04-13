import React from 'react';
import { render } from "react-dom";
import {Recipe} from './Recipe'
import { EditModal } from './EditModal'
// produce a list of recipes in a bootstrap card
export class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: null,
        name: "",
        ingredients: []
  }

    // bind the this contex to the updateRecipes function
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  handleDelete(e) {
    this.props.deleteRecipe(e.target.id);
    event.preventDefault();
  }

  handleEdit(e) {
    let name = e.target.id;
    let index = this.props.recipes.findIndex(x => x.name == name );
    let recipeToEdit = this.props.recipes[index];
    this.setState({
      id:  recipeToEdit.id,
      name: recipeToEdit.name,
      ingredients: recipeToEdit.ingredients
      });



    $('#editRecipe').on('shown.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var recipeName = button.data('name');
      var ingredients = button.data('ingredients');
       // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      modal.find('.modal-title').text('Edit the recipe ' + recipeName);
      modal.find('#recipeName').val(recipeName);
      modal.find('#ingredients').val(ingredients);

    })
     // $('#editRecipe').modal('show')

    }

    // this function will be sent to the EditModal component
    submitEdit(newRecipe, oldRecipe) {
      //console.log("newRecipe");      
      this.props.editRecipe(newRecipe);
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
      <button id={recipe.name} data-name={recipe.name} data-ingredients={recipe.ingredients} data-toggle="modal" data-target="#editRecipe" className="btn btn-link" onClick={this.handleEdit} >Edit</button>
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
        <EditModal id={this.state.id}
                    name = {this.state.name}
                  ingredients = {this.state.ingredients}
                  submitEdit = {this.submitEdit}
          />
        </div>
      </div>
    );
  }
}
