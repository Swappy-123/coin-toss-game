// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isCoin: true, totalCount: 0, headCount: 0, tailCount: 0}

  onMode = () => {
    const getNum = Math.floor(Math.random()*2)
    if (getNum === 0) {
      this.setState((prevState) => ({
        isCoin : true,
        headCount : prevState.headCount+1,
        totalCount : prevState.totalCount+1
      }))
    } else if (getNum === 1){
       this.setState((prevState) => ({
        isCoin : false,
        tailCount : prevState.tailCount+1,
        totalCount : prevState.totalCount+1
    }))
  }
  }

  render() {
    const {isCoin, tailCount, totalCount, headCount} = this.state
    const imgUrl = isCoin
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="img" />
          <button className="btn" type="button" onClick={this.onMode}>
            Toss Coin
          </button>
          <div className="con">
            <p className="button">
              Total: {totalCount}
            </p>
            <p className="button">
              Heads: {headCount}
            </p>
            <p className="button">
              Tails: {tailCount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
