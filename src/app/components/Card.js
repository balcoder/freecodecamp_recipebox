import React from "react";

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "recipes": [
        {
          "name": "Egg Fried Rice",
          "ingredients": ["rice","eggs","spring onion","oil"]
        },
        {
          "name": "Spaghetti Bologease",
          "ingredients": ["400g tin plum tomatoes","1 beef stock cube","onion & carrot &","oil"]
        }
      ]


    }

  }
    return(
      <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

        </button>
        </h5>
      </div>
      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
          <div id="root"></div>
        </div>
        <div className="card-body">
    <a href="#" className="card-link">Delete</a>
    <a href="#" className="card-link">Edit</a>
  </div>
      </div>
    </div>
    )
}

function

<div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button className="btn btn-link " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {this.props.recipes[0].name}
        </button>
        </h5>
      </div>
      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
          <RecipeList />
        </div>
        <div className="card-body">
          <button id="delete" className="btn btn-link" >Delete</button>
    <a href="#" className="card-link">Delete</a>
    <a href="#" className="card-link">Edit</a>
  </div>
      </div>
    </div>
