import React,{Component} from "react";
import {Card, Dropdown} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';



export class DetajetEPublicisteveTeLibraveShqip extends Component{
    

        constructor(props){
          super(props)
          this.state={prods:[]}
        }


        refreshList(){
          let {id} = this.props.match.params;
          fetch(process.env.REACT_APP_API+`publicistetshqip/${id}`,
          {
            method : 'GET'
          })
          .then(response=>response.json())
          .then(data=>{
            this.setState({prods:data});
          });
        }

        componentDidMount(){
          this.refreshList();
        }
      
        componentDidUpdate(){
          this.refreshList();
        }
      





    render(){
      const{prods}=this.state;
        return(
            


            <div className="container">
                <Helmet>
                <title>Detajet e Publicisteve Shqip</title>
                </Helmet>
                <Dropdown  className="d-flex justify-content-end mt-4">
                  <Dropdown.Toggle variant="success">
                   Detajet e Publicisteve Shqip
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <NavLink className="nav-link d-inline p-1 text-black" to="/publicistetshqip">
                      Publicistet Shqip
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="container d-flex flex-wrap">
                {prods.map(p=><Card className="mt-4" key={p.PublicistetID}>
                <Card className="mt-4 d-flex flex-row" style={{ width: '70rem' }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Emri i Publicisteve Shqip</Card.Title>
                      <Card.Subtitle>{p.Emri}</Card.Subtitle>
                  </Card.Body>

                  <Card.Body>
                    <Card.Title className="mb-4">Mbiemri i Publicisteve Shqip</Card.Title>
                      <Card.Subtitle>{p.Mbiemri}</Card.Subtitle>
                  </Card.Body>
                </Card>

                <Card className="mt-5" style={{ width: '70rem' }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Biografia e Publicistit Shqip</Card.Title>
                    <Card.Text>
                    {p.Biografia}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Card>
                )}
            </div>
            </div>
        )
    }
}