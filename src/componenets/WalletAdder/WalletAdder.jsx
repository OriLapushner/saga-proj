import React from "react";

const WalletAdder = props => {

  return <div>
    WalletAdder
    <input type="text" onChange={props.handleNameChange}/>
    <button onClick={props.addWallet}>add wallet</button>
  </div>;
};

export default WalletAdder;
