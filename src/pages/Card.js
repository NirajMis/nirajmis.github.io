import React, { useState, useEffect } from "react";

function Card(props) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const id = props.id
  // Get All Items From Local Storage
  useEffect(() => { getKeys() }, []);
  // Function getKeys
  const getKeys = () => {
    // Get All Keys
    let lskeys = Object.keys(localStorage)
    // Itreate Through Each Of Them
    lskeys.forEach((element) => {
      // If Localstorage keys === id setliked = true
      if (element === props.id) {
        setLiked(true);
      }
    });
  }
  // Like Is Clicked
  const likeClicked = () => {
    if (liked === false) {
      setLiked(true)
      // Saving Only Key In LocalStorage With Value Index+1
      localStorage.setItem(id, (props.index) + 1);
    } else {
      setLiked(false)
    }
  }
  // Dislike Is Clicked
  const dislikeClicked = () => {
    if (disliked === false) {
      setDisliked(true)
      // Removing Item From LocalStorage
      localStorage.removeItem(id)
    } else {
      setDisliked(false)
    }
  }
  return (
    <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.image} alt="blog" />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">EVENT</h2>
        <h1 className="title-font text-lg font-medium text-white mb-3">{props.title}</h1>
        <p className="leading-relaxed mb-3">{props.description}</p>
        <div className="flex items-center flex-wrap">
          <button onClick={() => { window.open(props.image) }} target="_blank" className="btn btn-info btn-sm text-black inline-flex items-center md:mb-2 lg:mb-0">New Tab
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <span onClick={likeClicked} className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800 cursor-pointer">
            {liked ? <i className="bi bi-suit-heart-fill"></i> : <i className="bi bi-suit-heart"></i>}
          </span>
          <span onClick={dislikeClicked} className="text-gray-500 inline-flex items-center leading-none text-sm cursor-pointer">
            {disliked ? <i className="bi bi-hand-thumbs-down-fill"></i> : <i className="bi bi-hand-thumbs-down"></i>}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
