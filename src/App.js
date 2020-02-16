import React from 'react';
import Play from './playsign.png';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Vimeo from '@u-wave/react-vimeo';
import { Container, Row, Col} from 'reactstrap';
import { Jumbotron } from 'reactstrap';


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

var huntBackground ={
  backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SY1000_SX675_AL_.jpg')",
  backgroundSize:"cover", 
  backgroundPosition:"center", 
  backgroundRepeat:"no-repeat", 
  overflow:"hidden", 
  filter: "blur(1rem)", 
  transform: "scale(1.1)"
}

var huntButton ={
  backgroundColor:"#0099ff", 
  borderColor:"#007acc", 
  margin:5
}

var nichtsBackground ={
  backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_SY1000_CR0,0,704,1000_AL_.jpg')",
  backgroundSize:"cover", 
  backgroundPosition:"center", 
  backgroundRepeat:"no-repeat", 
  overflow:"hidden", 
  filter: "blur(1rem)", 
  transform: "scale(1.1)"
}

var nichtsButton ={
  backgroundColor:"#00b8e6", 
  borderColor:"#008fb3", 
  margin:5
}

var vvBackground ={
  backgroundImage:"url('https://images-na.ssl-images-amazon.com/images/I/71eoNKrLrQL._RI_.jpg')",
  backgroundSize:"cover", 
  backgroundPosition:"center", 
  backgroundRepeat:"no-repeat", 
  overflow:"hidden", 
  filter: "blur(1rem)", 
  transform: "scale(1.1)"
}

var vvButton ={
  backgroundColor:"#a3a329", 
  borderColor:"#808000", 
  margin:5
}

var fourthBackground ={
  backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SY1000_CR0,0,706,1000_AL_.jpg')",
  backgroundSize:"cover", 
  backgroundPosition:"center", 
  backgroundRepeat:"no-repeat", 
  overflow:"hidden", 
  filter: "blur(1rem)", 
  transform: "scale(1.1)"
}

var fourthButton ={
  backgroundColor:"#336699", 
  borderColor:"#42668a", 
  margin:5
}

var fullmoonBackground ={
  backgroundImage:"url('https://images-na.ssl-images-amazon.com/images/I/71RW1RGNCpL._RI_.jpg')",
  backgroundSize:"cover", 
  backgroundPosition:"center", 
  backgroundRepeat:"no-repeat", 
  overflow:"hidden", 
  filter: "blur(1rem)", 
  transform: "scale(1.1)"
}

var fullmoonButton ={
  backgroundColor:"#808080", 
  borderColor:"#696969", 
  margin:5
}

var lwBackground ={
  backgroundImage:"url('https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg')",
  backgroundSize:"cover", 
  backgroundPosition:"center", 
  backgroundRepeat:"no-repeat", 
  overflow:"hidden", 
  filter: "blur(1rem)", 
  transform: "scale(1.1)"
}

var lwButton ={
  backgroundColor:"#9966ff", 
  borderColor:"#7733ff", 
  marginLeft:0,
  marginTop:10,
  marginRight:10
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

function SlideItem (props) {
  return (
    <div className="slideHeight">
      <div className="slideHeight" style={props.movieBackground}>
        <div className={props.overlay}></div>
      </div>
      <div className="carousel-caption">
        <Row>
          <Col xs="6" sm="5" lg="3" style={{padding:10}}>
            <img className="img-fluid" src={props.moviePosterUrl} />
          </Col>
          <Col xs="6" sm="7" lg="9" className="rightie" style={{padding:30}}>
            <h3 className="movieTitle" style={{color:"white"}}>{props.movieTitle}</h3>
            <p className="movieDesc" style={{color:"white", opacity:0.7}}>{props.movieDescription}</p>
            <Button size="sm" style={props.movieBuyButton} variant="primary"><span className="buttonDesc" style={{padding: 0, fontWeight:"bold"}}>
              <img className="playButtonSizing" style={{marginRight:5}} src={Play} />
              Buy Now</span>
            </Button>
            <Button size="sm" href={props.link} style={{margin:5}} variant="outline-light"><span className="buttonDesc" style={{fontWeight:"bold"}}>Watch Trailer</span></Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false
    };
  }
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
                  autoplay={this.state.autoplay}
                  slideshowSpeed={2000}
                  defaultActiveIndex={0}
                  leftIcon={this.state.leftIcon}
                  rightIcon={this.state.rightIcon}
                  onSelect={this._onSelect}
                  ref={r => (this.slider = r)}
                  version={4}
                  indicators={false}
                >
                  <SlideItem 
                    movieBackground={huntBackground} 
                    overlay="huntOverlay"
                    moviePosterUrl="https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SY1000_SX675_AL_.jpg" 
                    movieTitle="Hunt for the Wilderpeople" 
                    movieDescription="Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows."
                    movieBuyButton={huntButton}
                    link="https://vimeo.com/170252585">
                  </SlideItem>
                  <SlideItem 
                    movieBackground={nichtsBackground} 
                    overlay="nichtsOverlay"
                    moviePosterUrl="https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_SY1000_CR0,0,704,1000_AL_.jpg" 
                    movieTitle="Nichts passiert / A Decent Man" 
                    movieDescription="A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries."
                    movieBuyButton={nichtsButton}
                    link="https://vimeo.com/155591004">
                  </SlideItem>
                  <SlideItem 
                    movieBackground={vvBackground} 
                    overlay="vvOverlay"
                    moviePosterUrl="https://images-na.ssl-images-amazon.com/images/I/71eoNKrLrQL._RI_.jpg" 
                    movieTitle="Vice Versa" 
                    movieDescription="Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible."
                    movieBuyButton={vvButton}
                    link="https://vimeo.com/180836160">
                  </SlideItem>
                  <SlideItem 
                    movieBackground={fourthBackground} 
                    overlay="fourthOverlay"
                    moviePosterUrl="https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SY1000_CR0,0,706,1000_AL_.jpg" 
                    movieTitle="The Fourth Phase" 
                    movieDescription="From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice."
                    movieBuyButton={fourthButton}
                    link="https://vimeo.com/182511910">
                  </SlideItem>
                  <SlideItem 
                    movieBackground={fullmoonBackground} 
                    overlay="fullmoonOverlay"
                    moviePosterUrl="https://images-na.ssl-images-amazon.com/images/I/71RW1RGNCpL._RI_.jpg" 
                    movieTitle="Full Moon" 
                    movieDescription="Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport."
                    movieBuyButton={fullmoonButton}
                    link="https://vimeo.com/180790969">
                  </SlideItem>
                  <div className="slideHeight">
                    <div className="slideHeight" style={lwBackground}>
                      <div className="lwOverlay"></div>
                    </div>
                      <div className="carousel-center">
                        <Row>
                          <Col xs="8" sm="7" lg="9" style={{padding:10}}>
                            <Vimeo
                              className="vid-fluid"
                              height="300%"
                              video="https://vimeo.com/373140876"
                              controls={true}
                              autoplay={true}
                              autopause={true}
                              muted={true}
                            />
                          </Col>
                          <Col xs="4" sm="5" lg="3" className="rightie" style={{padding:20}}>
                            <h4 className="movieTitle" style={{color:"white"}}>Little Women <span className="italic">Trailer</span></h4>
                            <Button size="sm" style={lwButton} variant="primary"><span className="buttonDesc" style={{fontWeight:"bold"}}>
                              <img className="playButtonSizing" style={{marginRight:5}} src={Play} />
                              Buy Now</span>
                            </Button>
                          </Col>
                        </Row>
                    </div>
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

