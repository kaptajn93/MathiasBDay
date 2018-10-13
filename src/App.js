import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { showPresent: false };
    }

    showPresent() {
        this.setState({showPresent: !this.state.showPresent});

    }


render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };
    return (
      <div className="App">

              {!this.state.showPresent ?
                  <div className="App-body">
                      <ReactPlayer url='https://youtu.be/hmeEZSRUWLI' playing height={"50px"} width={"50px"} />
                      <div>
                          <img src={img1} />
                          <img src={img2} />
                          <img src={img3} />
                          <img src={img4} />
                      </div>

                      <div className="center">
                          <p>Ynglings Mathiesen, KÆMPE stort tillykke med fødselsdagen!</p>
                          <p>Vi håber at du bliver fejret og forkælet som du fortjener og håber du får den dag du ønsker dig!
                              Din søster elsker dig herfra og til månen 10000 gange!
                              Vi tænkte at vi i år gerne ville give dig din gave på en anden og anderledes måde, så derfor kan du tjekke din awsome gave ud her ;)
                          </p>
                          <button className={"myButton"} onClick={() => this.showPresent()}>Se din gave</button>
                          <p>KÆMPE knus fra Henrik og søs.</p>
                      </div>
                        <div>
                            <img src={img5}/>
                            <img src={img6}/>
                            <img src={img7}/>
                            <img src={img8}/>
                        </div>
                  </div>
               :
                  <div className={"Present"}>
                      <div className="Tillykke">
                          <img className="flag" src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/flag-for-denmark_1f1e9-1f1f0.png"}/>
                          <h1>TILLYKKE!</h1>
                          <img className="flag" src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/flag-for-denmark_1f1e9-1f1f0.png"}/>
                      </div>
                      <YouTube
                          videoId="HcaMIIhUHxE"
                          opts={opts}
                          onReady={this._onReady}
                      />
                  </div>
              }
      </div>
    );

  }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default App;
