import React, { useState } from "react";
import camimg from "./assets/action-camera.png";
// import Unsplash, { toJson } from "unsplash-js";
import { createApi } from "unsplash-js";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  //   const Unsplash = new Unsplash({
  //     accessKey: "cIg77oMEqCtI79A5fdEEF9qdpwvfAjdhJT2Rddttn-A"
  //   });

  const Unsplash = createApi({
    accessKey: "cIg77oMEqCtI79A5fdEEF9qdpwvfAjdhJT2Rddttn-A"
  });

  const SearchPhotos = async e => {
    console.log(query);
    e.preventDefault();
    Unsplash.search
      .getPhotos({
        query: query,
        page: 1,
        perPage: 10
        // color: "green"
        // orientation: "portrait"
      })
      .then(res => {
        console.log(res);
        setPics(res.response.results);
      });
    // console.log("Submitting the form")
    // console.log(Unsplash);
    // Unsplash.photos.get({ photoId: "apple" }).then(json => {
    //   console.log(json);
    // });
    //   .then(toJson)
  };

  return (
    <>
      <form className="form" onSubmit={SearchPhotos}>
        <label className="label" htmlFor="query">
          &nbsp;
          <img src={camimg} style={{ height: "50px" }} />
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`please search the name you want`}
          value={query}
          onChange={e => {
            return setQuery(e.target.value);
          }}
        />

        <button type="submit" className="button">
          search
        </button>
        <div className="card-list">
          {pics.map(pic => {
            console.log(pic);
            return (
              <div className="card" key={pic.id}>
                <img
                  className="card--image"
                  alt={pic.alt_description}
                  src={pic.urls.full}
                  width="50%"
                  height="50%"
                ></img>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
}
