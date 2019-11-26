import React, { useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

import illustration from "../../assets/illustrations/00_community.svg";

export default function Auth() {
  const [menuState, setMenuState] = useState();

  console.log(menuState);
  return (
    <main className="main_auth">
      <aside>
        <figure className="figure">
          <figcaption className="figcaption">
            <h2>17 Community</h2>
          </figcaption>
          <img src={illustration} alt="community login" />
        </figure>
      </aside>
      <section>
        <button onClick={() => setMenuState("LogIn")}> LogIn</button>
        <button onClick={() => setMenuState("SignIn")}> SginIn</button>
        {menuState === "LogIn" ? <Login /> : <Register />}
      </section>
    </main>
  );
}
