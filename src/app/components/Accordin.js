import React from 'react'
// produce a list of recipes in a bootstrap card
class Accordian extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("cards")
    console.log(this.props.recipes)
    var Cards = this.props.recipes.map((recipe, i) =>{
      return(
        <div className="card">
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
      <button id={"delete" + i} className="btn btn-link" >Delete</button>
      <button id={"edit" + i} className="btn btn-link" >Edit</button>
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
