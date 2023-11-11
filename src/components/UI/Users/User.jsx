import React from "react";
import "./User.css";

const User = ({ index, name, location, gender, email, picture }) => {

  const isEven = index % 2 === 0;

  return (
    <li className="user__content">
      {isEven? (
        <>
          <div className={`user__img ${isEven ? 'img_right' : 'img_left' }`}>
            <img src={picture.large} alt="user picture" className="img" />
          </div>
          <div className={`user__info ${isEven ? 'left' : 'right' }`}>
            <p className="name">
              {name.title} {name.first} {name.last}
            </p>
            <p>City: {location.city}</p>
            <p>State: {location.state}</p>
            <p>Country: {location.country}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
          </div>
        </>
      ) : (
        <>
          <div className={`user__info ${isEven ? 'left' : 'right' }`}>
            <p>
              {name.title} {name.first} {name.last}
            </p>
            <p>City: {location.city}</p>
            <p>State: {location.state}</p>
            <p>Country: {location.country}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
          </div>
          <div className={`user__img ${isEven ? 'img_right' : 'img_left' }`}>
            <img src={picture.large} alt="user picture" />
          </div>
        </>
      )}
    </li>
  );
};

export default User;
