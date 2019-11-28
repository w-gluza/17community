import React, { useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

// Material-UI Components Imports
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import illustration from "../../assets/illustrations/00_community.svg";

const Authentication = () => {
  const [menuState, setMenuState] = useState("SignUp");

  console.log(menuState);
  return (
    <main className="main__auth">
      <aside>
        <figure className="figure">
          <figcaption className="figcaption">
            <h2>17 Community</h2>
          </figcaption>
          <img src={illustration} alt="community login" />
        </figure>
      </aside>
      <section className="auth__section">
        <div className="buttons__container">
          <ButtonGroup>
            <Button
              color="primary"
              variant={menuState === "SignUp" ? "contained" : "outlined"}
              onClick={() => setMenuState("SignUp")}
            >
              Sign Up
            </Button>
            <Button
              color="primary"
              variant={menuState === "LogIn" ? "contained" : "outlined"}
              onClick={() => setMenuState("LogIn")}
            >
              Log In
            </Button>
          </ButtonGroup>
        </div>
        {menuState === "LogIn" ? (
          <>
            <Login />
            <p className="auth__paragraph">
              Don't have an account?{" "}
              <button onClick={() => setMenuState("SignUp")}>Sign Up!</button>
            </p>
          </>
        ) : (
          <>
            <Register />
            <p className="auth__paragraph">
              Already have an account?{" "}
              <button onClick={() => setMenuState("LogIn")}>Log In!</button>
            </p>
          </>
        )}
      </section>
    </main>
  );
};

export default Authentication;
