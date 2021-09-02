import React, { useEffect, useState } from "react";


//API URL
const API_URL = "https://api.giphy.com/v1/gifs/search?api_key=";
//MY API KEY and limit,offset values
const GIPHY_API = "Ty3qw0qWN30Ig3y4Rj91GeNq32sVIfe5&limit=20&offset=8&q="

export default function App() {
  const [search, setSearch] = React.useState("");
  const [gifs, setGifs] = React.useState([]);  

  const Gifsearcher = () => {
    // simple fetch 
    if(search.length > 0){
      //combine url+apikey+searchvalue
      fetch(API_URL+GIPHY_API+search)
      .then((res)=>{return res.json()})
      //result return gif url
      .then((result)=>{
        setGifs(result.data.map((gif)=>{
          return gif.images.fixed_height.url;
        }))
      })
      //if dont working, return this message
      .catch(()=>{
        alert("Try Again.");
      })
    }
  }
  return (
    <div>
      <div className="header text-center">
        <div>
          {/**event.target.value*/}
          <input 
            type="text" 
            placeholder="Write Something"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
          />
          
          <button onClick={Gifsearcher}>
            Search
          </button>
        </div>
      </div>
      <div className="result">
        {
          <div className="card text-center">
          <div className="card-header text-center">
            Gifs
          </div>
          <ul className="list-group list-group-flush">
            
            {
                gifs.map((gif)=>{
                  return (
                    <div>
                    <li className="list-group-item"> <img src={gif}/> </li>
                    </div>
                  )
                })
              }
          </ul>
        </div>
        }
      </div>
    </div>
  );
}

