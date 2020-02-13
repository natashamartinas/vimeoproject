import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import { Container, Row, Col} from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { Button } from 'react-bootstrap'; 

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

var white = {
  background: "white",
  paddingTop: "100px",
  paddingBottom: "100px",
  margin: "0px"
};

var gray = {
  background: "#303030",
  paddingTop: "100px",
  paddingBottom: "20px",
  margin: "0px"
};

var gradient = {
  paddingTop: "20px",
  paddingBottom: "100px",
  margin: "0px"
};

var whiteHeadingText = {
  color: "white", 
  fontWeight: "bold", 
  fontSize: 27
}

var whiteParagraph = {
  color: "white", 
  fontSize: 17.5
}

var blackHeadingText = {
  color: "black", 
  fontWeight: "bold", 
  fontSize: 27
}

var blackParagraph = {
  color: "black", 
  fontSize: 17.5
}


function SectionLeft (props) {
  return (
  <Jumbotron style={props.background} className="gradient" fluid>
    <Container>
      <Row>
        <div style={{textAlign: "center"}} className="left-col">
          <img src={props.imgurl} alt={props.imgtitle} className="responsive" />
        </div>
        <div className="right-col outerdiv">
          <div className="innerdiv">
            <Container className="themed-container">
              <span style={props.headingStyle}>{props.title}</span><br/>
              <span style={props.paragraphStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed loreem egstas mauris veneenatis commodo u id nibh. Ut porta libero sed semper faucibus.
              </span>
            </Container>
          </div>
        </div>
      </Row>
    </Container>
  </Jumbotron>
  );
}
function SectionRight (props) {
  return (
  <Jumbotron style={props.background} fluid>
    <Container>
      <Row>
        <div className="normal-left-col outerdiv">
          <div className="innerdiv">
            <Container className="themed-container">
              <span style={props.headingStyle}>{props.title}</span><br/>
              <span style={props.paragraphStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed loreem egstas mauris veneenatis commodo u id nibh. Ut porta libero sed semper faucibus.
              </span>
            </Container>
          </div>
        </div>
        <div style={{textAlign: "center"}} className="normal-right-col">
          <img src={props.imgurl} alt={props.imgtitle} className="responsive" />
        </div>
      </Row>
    </Container>
  </Jumbotron>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(1);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div>
        <SectionLeft background={white} imgurl="https://i.vimeocdn.com/video/595198868_505x160.jpg" headingStyle={blackHeadingText} paragraphStyle={blackParagraph} imgtitle="MONSOON III" title="MONSOON III" />
        <SectionRight background={gray} imgurl="https://i.vimeocdn.com/video/589972810_530x315.jpg" headingStyle={whiteHeadingText} paragraphStyle={whiteParagraph} imgtitle="BEAMS" title="BEAMS" />
        <SectionLeft background={gradient} imgurl="https://i.vimeocdn.com/video/590587169_530x315.jpg" headingStyle={whiteHeadingText} paragraphStyle={whiteParagraph} imgtitle="Move 2" title="Move 2" />
        <React.Fragment>
          <div className="container-fluid" style={{border:"10px", padding:"0px"}}>
            <Row>
              <Col span={12}>
                <RBCarousel
                  animation={true}
                  autoplay={false}
                  slideshowSpeed={2000}
                  defaultActiveIndex={0}
                  leftIcon={this.state.leftIcon}
                  rightIcon={this.state.rightIcon}
                  onSelect={this._onSelect}
                  ref={r => (this.slider = r)}
                  version={4}
                  indicators={false}
                >
                  <div style={{ height: 400}}>
                    <div className="blur-me" style={{height: 400, backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SY1000_SX675_AL_.jpg')", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", overflow:"hidden"}}>
                      
                    </div>
                    <div className="carousel-caption">
                      <Row>
                        <Col xs="6" sm="5" md="4" lg="3" style={{padding:10, border:"thick solid #0000FF"}}>
                          <img className="img-fluid" src="https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SY1000_SX675_AL_.jpg" />
                        </Col>
                        <Col xs="6" sm="7" md="8" lg="9" className="leftie" style={{padding:30, border:"thick solid #0000FF"}}>
                          <h3 style={{color:"white"}}>Hunt for the Wilderpeople</h3>
                          <p style={{color:"dimgray", opacity:0.7, fontSize:17.5}}>Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.</p>
                          <Button style={{backgroundColor:"#4682B4", borderColor:"#5F9EA0", margin:5}} variant="primary">Buy Now</Button>
                          <Button style={{margin:5}} variant="outline-light"><span style={{fontWeight:"bold"}}>Watch Trailer</span></Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div style={{ height: 400}}>
                    <div className="carousel-caption">FUCK YES</div>
                    <div className="blur-me" style={{height: 400, backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SY1000_SX675_AL_.jpg')", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", overflow:"hidden"}}></div>
                  </div>
                  <div className="blur-me" style={{ height: 400, backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_SY1000_CR0,0,704,1000_AL_.jpg')", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", overflow:"hidden"}}>
                    <div className="carousel-caption">Image</div>
                  </div>
                  <div className="blur-me" style={{ height: 400, backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_SY1000_CR0,0,704,1000_AL_.jpg')", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", overflow:"hidden"}}>
                    <div className="carousel-caption">Image</div>
                  </div>
                  <div className="blur-me" style={{ height: 400, backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_SY1000_CR0,0,704,1000_AL_.jpg')", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", overflow:"hidden"}}>
                    <div className="carousel-caption">Image</div>
                  </div>
                  <div style={{ ...styles, backgroundColor: "aqua" }}>
                    <video
                      className="carousel-center"
                      controls
                      style={{ width: "75%" }}
                      height="250"
                    >
                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="carousel-caption">Video</div>
                  </div>
                  <div style={{ ...styles, backgroundColor: "lightpink" }}>
                    <div className="carousel-center">center Text</div>
                    <div className="carousel-caption">Text</div>
                  </div>
                  <div style={{ ...styles, backgroundColor: "lightblue" }}>
                    <span>text</span>
                    <div className="carousel-caption">Text</div>
                  </div>
                  <div style={{ ...styles, backgroundColor: "lightblue" }}>
                    <div className="carousel-center">
                      <iframe
                        style={{ width: 500 }}
                        height="250"
                        src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                    <div className="carousel-caption">Youtube</div>
                  </div>
                </RBCarousel>
              </Col>
            </Row>
          </div>
        </React.Fragment>
      </div>
    );
  }
};

