import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="py-2">
      <div className="container">
        <p className="text-center">Latest uploads</p>
        <div className="row mb-4">
          <div className="col-md-3">
            <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery"
              data-height="560" data-width="560">
              <img src="https://source.unsplash.com/random/560x560" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://source.unsplash.com/random/561x561" data-toggle="lightbox" data-gallery="img-gallery"
              data-height="561" data-width="561">
              <img src="https://source.unsplash.com/random/561x561" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://source.unsplash.com/random/562x562" data-toggle="lightbox" data-gallery="img-gallery"
              data-height="562" data-width="562">
              <img src="https://source.unsplash.com/random/562x562" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://source.unsplash.com/random/563x563" data-toggle="lightbox" data-gallery="img-gallery"
              data-height="563" data-width="563">
              <img src="https://source.unsplash.com/random/563x563" alt="" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <a href="https://source.unsplash.com/random/564x564" data-toggle="lightbox" data-gallery="img-gallery"
              data-height="564" data-width="564">
              <img src="https://source.unsplash.com/random/564x564" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://source.unsplash.com/random/565x565?image=565" data-toggle="lightbox"
              data-gallery="img-gallery" data-height="565" data-width="565">
              <img src="https://source.unsplash.com/random/565x565?image565" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://source.unsplash.com/random/565x565?image=566" data-toggle="lightbox"
              data-gallery="img-gallery" data-height="566" data-width="566">
              <img src="https://source.unsplash.com/random/565x565?image566" alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery