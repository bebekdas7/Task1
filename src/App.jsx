import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="card-container container d-flex justify-content-start align-items-center flex-wrap gap-3">
      {data.length > 0 ? (
        data.map((item) => (
          <section
            className="card d-flex flex-column justify-content-center align-items-center gap-1 p-1"
            key={item.id}
          >
            <img src={item.image_url} alt="" />
            <div className="detail"></div>
            <section className="detail w-100 mt-1">
              <p className="bitter">
                <b>Name:</b> {item.name}
              </p>
              <p className="bitter">
                <b>Volume:</b> {item.volume.value}
                {item.volume.unit}
              </p>
              <p>
                <b>
                  <u>Tagline</u>:
                </b>
                <br /> {item.tagline}
              </p>
            </section>
          </section>
        ))
      ) : (
        <div>No Item available</div>
      )}
    </div>
  );
}

export default App;
