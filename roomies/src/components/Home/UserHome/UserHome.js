import React, { Component, memo } from "react";
import "../../GenericComponents/general.scss";
import "../home.scss";
import HomeMsgs from "./HomeMsgs";
import HomeStatus from "./HomeStatus";
import HomeBills from "./HomeBills";
import HomeChores from "./HomeChores";

class UserHome extends Component {
  render() {
    return (
      <div className="card user-main">
        {/* <h3>USER HOME</h3> */}
        <div className="flex-container">
          <div className="flex-container homeColumn">
            <HomeMsgs />
            <HomeChores />
          </div>
          <HomeStatus />
        </div>
        <HomeBills />
      </div>
    );
  }
}

export default memo(UserHome);
