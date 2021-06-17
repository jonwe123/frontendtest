import React from "react"
import laptop from "./img/laptop.png"

const Info = () => {
  return (
    <div id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatum modi exercitationem earum cum
              aliquam fugiat enim quos blanditiis ab!</p>
            <a href="about.html" className="btn btn-outline-danger btn-lg">Learn more</a>
          </div>
          <div className="col-md-6">
            <img src={laptop} className="img-fluid" alt="image" />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Info