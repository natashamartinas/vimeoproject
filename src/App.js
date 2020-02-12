import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';
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
  render() {
    return (
      <div>
        <SectionLeft background={white} imgurl="https://i.vimeocdn.com/video/595198868_505x160.jpg" headingStyle={blackHeadingText} paragraphStyle={blackParagraph} imgtitle="MONSOON III" title="MONSOON III" />
        <SectionRight background={gray} imgurl="https://i.vimeocdn.com/video/589972810_530x315.jpg" headingStyle={whiteHeadingText} paragraphStyle={whiteParagraph} imgtitle="BEAMS" title="BEAMS" />
        <SectionLeft background={gradient} imgurl="https://i.vimeocdn.com/video/590587169_530x315.jpg" headingStyle={whiteHeadingText} paragraphStyle={whiteParagraph} imgtitle="Move 2" title="Move 2" />
      </div>
    );
  }
};

