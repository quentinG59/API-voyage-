import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    // console.log(tours);
    setTours(tours);
    setIsLoading(false);
  };
  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return (
      <section className="container loading-container">
        <Loading />
      </section>
    );
  }

  const refresh = () => {
    getTours();
  };

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return <Tours voyages={tours} removeItem={removeItem} refresh={refresh} />;
}

export default App;
