import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
const Catalog = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#220000" }}
        className="container-fluid py-3"
      >
        <div className="row py-5">
          <div className="col text-white text-center py-5">
            <h3>BROWSE OUR MOVIES</h3>
            <h1>
              <strong>CATALOG</strong>
            </h1>
          </div>
        </div>
      </div>
      <div
        className="container-fluid "
        style={{ backgroundColor: "#E40004" }}
      ></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ol className="breadcrumb justify-content-center py-3">
              <li className="breadcrumb-item text-danger">
                <a>Home</a>
              </li>
              <li className="breadcrumb-item text-danger">Catalog</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  ">
          <div className="col">
            <div className="mt-5 border-bottom">
              <h2 className="pb-5">WATCH MOVIES ONLINE</h2>
            </div>
            <Form inline className="justify-content-center   mt-5">
              <FormControl
                type="text"
                placeholder="Search Movie"
                className="mr-sm-2 pr-5  "
              />
              <Button variant="danger">Search</Button>
            </Form>
            <MovieCatalog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

const MovieCatalog = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=572e9f2c533885e3d1f8d9c7071eb429&language=en-US&page=1"
      )
      .then((result) => {
        // console.log(result.data);
        setMovie(result.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const array = movie.map((item, index) => {
    if (index < 12) {
      return (
        <div class="col-md-4 my-5">
          <div class="card" key={item.index}>
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`}
              class="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                vote : {item.vote_average}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted ">
                release: {item.release_date}{" "}
              </h6>
            </div>
          </div>
        </div>
      );
    }
  });

  return <div className="row">{array}</div>;
};
