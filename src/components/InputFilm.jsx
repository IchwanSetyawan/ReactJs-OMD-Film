import React, { Component } from 'react'
import { Row, Col, Button, Form, Input  } from 'reactstrap';
import ShowFilm from './ShowFilm';




export default class InputFilm extends Component {
    constructor(props){
        super(props );

        this.state = {
            title : '',
            searchFilm: [],
            isLoading : false            
        }
        
        
    }
        
        async getApi(){
            try {
                const url = await `http://www.omdbapi.com/?i=tt3896198&apikey=b35121f&t=${this.state.title}`;
                const response = await fetch(url);
                const data = await response.json();
                this.setState({ searchFilm: data, isLoading:true});                          
            } catch (error) {
                console.log(error);
            }
            
        }

         componentDidMount() {
              // this.getApi();  
        }
        
         search(event){             
             this.setState({title:event.target.value})                            
        }
        
     onHandleClick(event){
         event.preventDefault();
         this.getApi();  
          
        }

    render() {    
        return (
          <div className="container" style={{ marginTop: "20px" }}>
            <Row>
              <Col
                sm="6"
                md={{ size: 6, offset: 3 }}
                style={{ backgroundColor: "#66CDAA", padding:"10px" }}
              >
                <h1>Search Film</h1>
                <Form>
                  <Input
                    placeholder="Title"
                    bsSize="md"
                    type="text"
                    onChange={this.search.bind(this)}
                  />
                  <Button
                    style={{ marginTop: "5px" }}
                    color="primary"
                    size="md"
                    block
                    onClick={this.onHandleClick.bind(this)}
                  >
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>

            <hr />
            <Row style={{ marginTop: "50px" }}>
              {this.state.isLoading ? (
                <div>
                  <ShowFilm
                    img={this.state.searchFilm.Poster}
                    title={this.state.searchFilm.Title}
                    genre={this.state.searchFilm.Genre}
                    runtime={this.state.searchFilm.Runtime}
                    plot={this.state.searchFilm.Plot}
                  />
                </div>
              ) : null}
            </Row>
          </div>
        );
    }
}
