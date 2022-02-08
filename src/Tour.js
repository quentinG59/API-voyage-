import { useState } from "react";

const Tour = (props) => {
  const [ReadMore, setReadMore] = useState(false);
  return (
    <>
      <section className="container">
        <div className="card">
          <img src={props.image} alt={props.name} />
          <div className="info">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
          </div>
          <div className="card-info">
            <p className="description">
              {ReadMore ? props.info : props.info.substring(0, 200)}
              <button
                className="btn read"
                onClick={() => setReadMore(!ReadMore)}
              >
                {ReadMore ? "readless" : "readmore"}
              </button>
            </p>
            <button className="btn" onClick={() => props.removeItem(props.id)}>
              pas intéressé
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour;
