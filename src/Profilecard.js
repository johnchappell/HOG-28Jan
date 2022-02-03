import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SApp'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Profilecard(props){
    const [show,setShow]=useState(false);
    const[like,setLike] = useState(false);
{/* console.log(Profilecard) */}

    return (
        <>
            <Card id="main"className="Card "  style={{ width: '14rem'}} >
                <Card.Body >
                <Card.Img  className="mh-10 mw-10 cardImg hover-shadow"  src={props.picture} alt="" />
                <h5 
                onClick={()=>setLike((prevLike) => !prevLike)}>  {like ? "Saved" : "Save?"}</h5>
                {/* Had to remove the <h3> below as it was giving an error, but still displayed
                */}
                    <Card.Text>{props.firstName} {props.lastName}</Card.Text>
                    <Card.Text>{props.bio}</Card.Text>
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