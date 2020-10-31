import React, { Component } from "react";
import {
  Row,
  Col,  
  CardImg,
  CardBody  
} from "reactstrap";

class ShowFilm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm="6" md={{ size: 3, offset: 3 }}>
            <CardImg
              id="showImage"
              top
              width="100%"
              src={this.props.img}
              alt="Card image cap"
            />
          </Col>
          <Col sm="6" md={{ size: 6, offset: 0 }}>
            <CardBody>
              <table>
                <tbody>
                  <tr>
                    <td>Title</td>
                    <td>:</td>
                    <td>
                      <b>{this.props.title}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td>:</td>
                    <td>
                      <b>{this.props.genre}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>:</td>
                    <td>
                      <b>{this.props.runtime}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Plot</td>
                    <td>:</td>
                    <td>
                      <b>{this.props.plot}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShowFilm;
