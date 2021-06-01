import React, { Fragment } from "react";

const ConnectATM = (props) => {
  const atmConnectHandler = (event) => {
      event.preventDefault();
    console.log("send a connection request");
    props.onConnectAtm();
  };

  const sendBalEnqHandler = (event) => {
      event.preventDefault();
    console.log("send a balance enquiry request");
  };

  return (
    <Fragment>
      <h1>ATM Sim</h1>
      <form>
        <div>
          <button onClick={atmConnectHandler}>Connect to a ATM</button>
        </div>
        <div>
          <button onClick={sendBalEnqHandler}>Send Balance Enquiry</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ConnectATM;
