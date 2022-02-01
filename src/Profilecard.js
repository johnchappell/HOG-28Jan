import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SApp'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Profilecard(props){
    const [show,setShow]=useState(false)
console.log(Profilecard)

    return (
        <>
            <Card id="main"className="Card "  style={{ width: '14rem'}} >
                <Card.Body >
                <Card.Img  className="mh-10 mw-10 cardImg hover-shadow"  src={props.picture} alt="" />
                <Button variant="danger" size="sm" 
                >Shortlist profile</Button>
                    <Card.Text><h3> {props.firstName} {props.lastName}</h3></Card.Text>
                    <Card.Text>{props.userType}</Card.Text>
                    <Card.Text>{props.email}</Card.Text>
                    <Card.Text>{props.location}</Card.Text>
                    


                    <Card.Link href={"mailto:"+props.email}> <FontAwesomeIcon icon = {faEnvelope}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href={props.github}><FontAwesomeIcon icon = {faGithub}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href={props.linkedin}><FontAwesomeIcon icon = {faLinkedin}></FontAwesomeIcon></Card.Link>
                    <Card.Link target="_blank" href= {props.portfolio}><FontAwesomeIcon icon = {faPortrait}></FontAwesomeIcon></Card.Link>
                    <br/>
                    { show?
                    <>
                    <Card.Text>{props.cv}</Card.Text>
                    <Card.Text>Hired: {props.hired}</Card.Text>
                    <Card.Text>Course: {props.course}</Card.Text>
                    <Card.Text>Skills: {props.skills}</Card.Text>
                    <Button class="see-less-btn" size="sm" onClick={() => setShow(!show)}>See less</Button>
                    <br />
                    <br/>
                    <Button variant="success" size="sm" onClick={() => props.updateProfile(props.id)}> update</Button>
                    <Button variant="danger" size="sm" onClick={() => props.removeProfile(props.id)}> remove</Button>
                    </> 
                    :<a class="see-more-btn" onClick={() => setShow(!show)}>See more</a>
                    }
                    <br />
                </Card.Body>
            </Card>
        </>
    )
}

export default Profilecard;