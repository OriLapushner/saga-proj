import React, { Component } from 'react';
import './App.css';
import WalletsList from './componenets/WalletsList/WalletsList'
import WalletAdder from './componenets/WalletAdder/WalletAdder'

import walletService from './walletService.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     wallets: [],
     walletName: ''
    }
  }
  componentDidMount(){
    walletService.getWallets()
    .then(response => {
      console.log(response.data)
      this.setState(state => {
        return {
          ...state,
          wallets:response.data
        }
      })
    })
  }
  addWallet = () => {
    console.log(this.state.walletName)
    walletService.addWallet(this.state.walletName)
  }
  handleNameChange = e => {
    var newName = e.target.value
    this.setState(state => {
      return {
        ...state,
        walletName:newName
      }
    })
  }
  render() {
    return (
      <div className="App">
        <WalletAdder handleNameChange={this.handleNameChange} addWallet={this.addWallet}/>
        <WalletsList wallets={this.state.wallets}/>
      </div>
    );
  }
}

export default App;
