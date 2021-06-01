import React, { Fragment, useState } from "react";
import ConnectATM from "../atm/ConnectATM";
import { connectToAtm } from "../lib/api";

const Atm = () => {
  const [isDataFected, setDataFected] = useState(false);
  const connectAtmHandler = () => {
    console.log("in connectAtmHandler in ATM.js");

    const data = connectToAtm();
    if (data) {
      setDataFected(true);
    }
    console.log(data);
  };

  return (
    <Fragment>
      <ConnectATM onConnectAtm={connectAtmHandler} />
      {isDataFected && <h2>Connected to ATM</h2>}
    </Fragment>
  );
};

export default Atm;
