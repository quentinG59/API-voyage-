import { useState } from "react";

const Tour = ({ removeItem, id, name, info, image, price }) => {
  const [ReadMore, setReadMore] = useState(false);
  return (
    <>
      <section className="container">
        <div className="card">
          <img src={image} alt={name} />
          <div className="info">
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <div className="card-info">
            <p className="description">
              {ReadMore ? info : info.substring(0, 200)}
              <button
                className="btn read"
                onClick={() => setReadMore(!ReadMore)}
              >
                {ReadMore ? "readless" : "readmore"}
              </button>
            </p>
            <button className="btn" onClick={() => removeItem(id)}>
              pas intéressé
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour;
