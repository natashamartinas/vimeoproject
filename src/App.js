import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';


const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButton = styled.div`
`;

const AppLayout = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

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



function SectionLeft (props) {
  return (
  <Jumbotron style={props.background} className="gradient" fluid>
    <Container>
      <Row>
        <Col style={{textAlign: "center"}} md="12" lg="6">
          <img src={props.imgurl} alt={props.imgtitle} className="img-fluid" />
        </Col>
        <Col md="12" lg="6">
          <Container className="themed-container">
            <p>{props.title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed loreem egstas mauris veneenatis commodo u id nibh. Ut porta libero sed semper faucibus.</p>
          </Container>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  );
}
function SectionRight (props) {
  return (
  <Jumbotron style={props.background} fluid>
    <div>Hello</div>
    <Container>
      <Row>
        <Col md="12" lg="6">
          <Container className="themed-container">
            <p>{props.title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed loreem egstas mauris veneenatis commodo u id nibh. Ut porta libero sed semper faucibus.</p>
          </Container>
        </Col>
        <Col style={{textAlign: "center"}} md="12" lg="6">
          <img src={props.imgurl} alt={props.imgtitle} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SectionLeft background={white} imgurl="https://i.vimeocdn.com/video/595198868_505x160.jpg" imgtitle="Monsoon III" title="Monsoon III" />
        <SectionRight background={gray} imgurl="https://i.vimeocdn.com/video/589972810_530x315.jpg" imgtitle="BEAMS" title="BEAMS" />
        <SectionLeft background={gradient} imgurl="https://i.vimeocdn.com/video/590587169_530x315.jpg" imgtitle="Move 2" title="Move 2" />
      </div>
    );
  }
};

