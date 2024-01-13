import logo from './assets/Logo.png';
import './App.css';
import Overlay from './components/Overlay';
import sound from './assets/music/audio.mp3';
import dolfin from './assets/dolfin.png';
import tg from './assets/TG.svg';
import twitter from './assets/Twitter.svg';
import runningImg from './assets/runningImg.png';
import dolfinLay from './assets/dolfinLay.png'

function App() {

  const contract = "TBA";
  const supply ="1.488.000.000";
  const ticker = "$ADOLF";

  const playAudio = () => {
    const audio = document.querySelector('.audio');
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="App">
      <div className="insideApp">
        <Overlay playAudio={playAudio} />
        <audio autoPlay className="audio" loop>
          <source src={sound} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="main">
          <div className="header">
            <div className="layout headerBlock">
              <div className="logoDiv">
                <img alt="logo" src={logo} className="logoHeader" />
              </div>
              <div className="menu">
                <ul className="list">
                  <a href="#buy"><li className="listItem">Buy $ADOLF</li></a>
                  <a href="#about"><li className="listItem">About Mein Fuhrer</li></a>
                </ul>
              </div>
            </div>
          </div>
          <div className="buy layout" id="buy">
            <div className="buyContent">
              <div className="imgBlock">
                <img alt="Adolfin" src={dolfin}/>
              </div>
              <div className="textBlock">
                <div className="contractBlock">
                  <p className="contractText">CA:{contract}</p>
                </div>
                <h1 className="heading">
                  MEIN FUHRER <br/>
                  SOLANA MOONING
                </h1>
                <button className="mainButton">
                  BUY {ticker}
                </button>
                <div className="socialsBlock">
                  <a href="https://twitter.com/aDolfin_1488"><img className="socialImg" alt="telegram" src={tg}/></a>
                  <a href="https://t.me/aDolfin_channel"><img className="socialImg" alt="twitter" src={twitter}/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="runningStringBlock">
              <h1 className="runningString adolf">
                <span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} /><span className="white">{ticker}</span><img className="runningImg" alt="adolfinCrew" src={runningImg} />
              </h1>
            </div>
            <div className="aboutContent" id="about">
              <div className="textAbout">
                <h1 className="subHeading">
                About Mein Fuhrer
                </h1>
                <p className="bodyText">
                Fischler's speech:<br/><br/>As always, I tried to peacefully achieve a revision, a change in this unbearable situation. It is a lie when the world says that we want to achieve change by force.<br/><br/> In the same way, I tried to solve the problem of Bitcoin, corridor, etc., offering a peaceful discussion of the problems.
                <br/><br/>In a conversation with Solansky statesmen, I discussed the ideas that you are familiar with from my last speech in the Solstag.<br/><br/>There is nothing in the world more modest and loyal than these proposals.<br/><br/>These proposals were rejected. Not only was the answer first mobilization, but then increased terror and pressure on our compatriots ...
                <br/><br/>The Co was not ready to resolve the Corridor problem in a reasonable way... I made another final effort to accept the offer of mediation from the Bitcoin Government. <br/><br/>For two days in a row, I sat with my government and waited to see if the Solana government would consider it possible to send an authorized representative or not.
                <br/><br/>Deputies, if the Maritime Government and its Fuhrer had patiently endured such treatment of the Sea, they would only deserve to disappear from the political scene. However, the one who will regard my love for peace and my patience as weakness or even cowardice will be wrong.
                <br/><br/>These proposals for mediation have failed...
                </p>
              </div>
              <div className="infoBlock">
                <h3 className="tokenName">
                  AdolfinFishlerOnSolana
                </h3>
                <h3 className="string">
                  TICKER: <span className="red">{ticker}</span>
                </h3>
                <h3 className="string">
                  CA: <span className="red">{contract}</span>
                </h3>
                <h3 className="string">
                  SUPPLY: <span className="red">{supply}</span>
                </h3>
                <h3 className="string">
                  MINT REVOKE: <span className="red">YES</span>
                </h3>
                <h3 className="string">
                  LP BURN: <span className="red">3 MINUTES AFTER LAUNCH</span>
                </h3>
                <img alt="" className="dolfinLay" src={dolfinLay}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
