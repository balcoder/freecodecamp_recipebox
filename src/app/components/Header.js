import React from "react";
// stateless component
//jumbotron with add recipe button 
export const Header = () => {
  function myModal() {
     $('#myModal').modal('show');
  }
    return(
      <div className="jumbotron bg-success text-white">
        <h1>FCC Recipe Box</h1>
    <p>Save all your recipes for your most favourite foods. Create new recipes or edit and delete old ones.</p>
     <p><a className="btn btn-primary btn-lg" role="button">Add Recipe</a></p>
      </div>
    )

}
