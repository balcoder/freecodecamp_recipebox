import React from 'react';

// modal to handle the recipe inputs
class MyModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
       name: '',
      ingredients: ''
    }

  this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeIngred = this.handleChangeIngred.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeIngred(event) {

    this.setState({ingredients: event.target.value.split(",")});
  }

  handleSubmit(event) {
    let newRecipe = this.state;
    console.log("Hit submit button and pass newRecipe below to update");
    console.log(newRecipe);
    this.props.update(newRecipe);
  }

  render(){
  return(
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label>
        <label>
          Ingredients:<br/>
          <textarea value={this.state.ingredients} onChange={this.handleChangeIngred} />
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