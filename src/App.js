import logo from './assets/logo.png';
import './App.css';
import tokenSlut from './assets/slut1.png';
import tokenSlut2 from './assets/slut2.png';
import mainSlut from './assets/mainSlut.png';
import tg from './assets/tg.svg';
import tw from './assets/tw.svg';

function App() {

  const contract = "TBA";
  const supply ="69.696.696";
  const ticker = "$SLUT";

  return (
    <div className="App">
      <div className="insideApp">
        <div className="main">
          <div className="section1">
            <div className="header">
              <div className="layout headerBlock">
                <div className="logoDiv">
                  <img alt="logo" src={logo} className="logoHeader" />
                </div>
                <div className="menu">
                  <ul className="list">
                    <a href="#buy"><li className="listItem">{ticker}</li></a>
                    <a href="#about"><li className="listItem">TOKENOMICS</li></a>
                  </ul>
                  <div className="socialsBlock">
                  <a href="https://t.me/tiedupslut" _blank><img className="socialImg" alt="telegram" src={tg}/></a>
                  <a href="https://twitter.com/BDSMonSol" _blank><img className="socialImg" alt="twitter" src={tw}/></a>
                </div>
                </div>
              </div>
            </div>
            <div className="buy layout" id="buy">
              <div className="buyContent">
                <div className="imgBlock">
                  <img alt="Adolfin" src={mainSlut}/>
                </div>
                <div className="textBlock">
                  <div className="contractBlock">
                    <p className="contractText">CA:{contract}</p>
                  </div>
                  <h1 className="heading">
                    TIED UP SLUT <br/>
                    TIED FOR YOU
                  </h1>
                  <p className="subHeading">
                    Tied up slut is ready to be drained by degens tongue! <br />to be able to do that , you need to have atleast<br />
                    10000 $TIED on your wallet balance.
                  </p>
                  <a href="https://raydium.io/"><button className="mainButton">
                    BUY {ticker}
                  </button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="aboutContent" id="about">
              <div className="divider">
                <br/>
              </div>
            </div>
          </div>
          <div className="tokenomics" id="tokenomics">
            <div className="tokInside">
              <div className="slutBlock">
                <img className="slut" src={tokenSlut} />
              </div>
              <div className="slutBlockText">
                <h2 className="tokenomicsHeading">
                  TOKENOMCIS
                </h2>
                <h2 className="tokenomicsText">SUPPLY: {supply}</h2>
                <h2 className="tokenomicsText">SYMBOL: {ticker}</h2>
                <h2 className="tokenomicsText">MINT: REVOKED</h2>
                <h2 className="tokenomicsText">LP BURN: BURNED</h2>
              </div>
              <div className="slutBlock">
                <img className="slut" src={tokenSlut2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
