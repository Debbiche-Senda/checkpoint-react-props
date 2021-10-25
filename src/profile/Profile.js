import React from "react";
import propTypes from "prop-types";

const handleName = (x) => {
  return alert(`My name is ${x}`);
};
// export default function Profile(props) {

export default function Profile({
  fullname,
  adress,
  bio,
  profession,
  desc,
  children,
}) {
  return (
    <div style={{ color: "red" }}>
      {children}
      <h1> {fullname}</h1>
      <h2> {adress}</h2>
      <h2> {bio}</h2>
      <h2> {profession}</h2>
      <h2> {desc}</h2>

      {/* <h1> {props.fullname }</h1>
            <h1> {props.adress }</h1> */}
      <button
        onClick={() => {
          handleName(fullname);
        }}
      >
        {" "}
        Profile{" "}
      </button>
    </div>
  );
}

Profile.defaultProps = {
  desc: "No description",
};


Profile.propTypes={
    bio : propTypes.string
}