import { useState, useEffect } from "react";
import App from "./App";
import Tour from "./Tour";
const Tours = ({ voyages, removeItem, refresh }) => {
  console.log(voyages);
  return (
    <>
      <section>
        <div className="title">
          <h2>{voyages.length === 0 ? "Pas de voyage" : "Nos voyages"}</h2>
        </div>
        {voyages.length === 0 ? (
          <button className="btn" onClick={() => refresh()}>
            refresh
          </button>
        ) : (
          voyages.map((tour) => (
            <Tour key={tour.id} {...tour} removeItem={removeItem}></Tour>
          ))
        )}
      </section>
    </>
  );
};

export default Tours;
