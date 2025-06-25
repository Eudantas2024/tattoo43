
// src/pages/Portfolio.jsx
import React from "react";

function Portfolio() {
  return (
    <div>
      <h2 className="mb-4">Nosso Portfólio</h2>
      <p>Veja algumas das nossas tatuagens realizadas:</p>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img src="https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/99e8078b-60f2-4d80-a564-2a41bffe45d1/pexels-cottonbro-5185051.jpg" className="img-fluid rounded" alt="Tattoo 1" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://alexie.co/wp-content/uploads/2023/02/Best-Traditional-Beach-Tattoo.jpg" className="img-fluid rounded" alt="Tattoo 2" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="https://glaminati.com/wp-content/uploads/2023/01/tattoo-ideas-for-men-full-sleeve-mechanic.jpg" className="img-fluid rounded" alt="Tattoo 3" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;