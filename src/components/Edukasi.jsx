import React from "react";
import ReactPlayer from "react-player";

function Edukasi() {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <ReactPlayer
            id="player"
            className="player"
            url="https://youtu.be/9rWUiEeGok8"
            width="100%"
            height="580px"
            playing={true}
            diredam={true}
          />
        </div>
        <div className="carousel-item">
          <ReactPlayer
            id="player"
            className="player"
            url="https://youtu.be/cxH0Y_evvio"
            width="100%"
            height="580px"
            playing={true}
            diredam={true}
          />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Edukasi;
