import React from 'react';
import { render } from "react-dom";
// modal to handle the recipe inputs
export class EditModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: props.id,
       name: props.name,
      ingredients: props.ingredients
    }
// bind the this contex to the updateRecipes function
  this.handleChangeName = this.handleChangeName.bind(this);
  this.handleChangeIngred = this.handleChangeIngred.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChangeName(event) {
    this.setState({name: event.target.value,
                    id: this.props.id,
                  ingredients: this.props.ingredients});
  }

  handleChangeIngred(event) {
    this.setState({ingredients: event.target.value.split(","),
                    id: this.props.id,
                    name: this.props.name});
  }

  handleSubmit(event) {
    let oldRecipe = {
      id: this.props.id,
      name: this.props.name,
      ingredients: this.props.ingredients
      };
    let newRecipe = this.state;
    this.props.submitEdit(newRecipe, oldRecipe);
    event.preventDefault();
    $('#editRecipe').modal('hide')
  }

  render(){

  return(
    <div className="modal fade" id="editRecipe" tabIndex="-1" role="dialog" aria-labelledby="editRecipeModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Recipe</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input id="recipeName" className="name" type="text"
                 onChange={(event) => this.handleChangeName(event)} />
          </label>
        <label>
          Ingredients:<br/>
          <textarea id="ingredients" onChange={this.handleChangeIngred} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  );
  }
}
