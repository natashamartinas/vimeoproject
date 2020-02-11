import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButton = styled.div`
`

const AppLayout = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron style={{backgroundColor: bgColors.Yellow}}>
          <Container>
            <Row>
              <Col style={{textAlign: "center"}} xs="6">
                <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg" alt="Monsoon III" />
              </Col>
              <Col xs="6">
                <p>Monsoon III</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed loreem egstas mauris veneenatis commodo u id nibh. Ut porta libero sed semper faucibus.</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
};

