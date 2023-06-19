import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import { projectsArray } from "./home/Project";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "./home/migration";
import Container from "react-bootstrap/Container";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const ProjectDetails = React.forwardRef((props, ref) => {
    const [index, setIndex] = useState(-1);
    const {projectId} = useParams();
    const project = projectsArray.find((p) => {
        return p.id === projectId
    });
    useEffect(()=>{
        window.scroll('top',0)
    },[])

    return (
        <div className="projectDetailsContainer">
        <Jumbotron
            className='d-flex'
            fluid
            id="project-details"
        >
            <Container >
                <div ref={ref} >
                    <Col md={12} className="w-100">
                        <div className="rounded d-flex flex-column">
                            <div className='text-center' as="h5">{project.name} </div>
                            <div className="container d-flex flex-column h-50">
                                <div className='overflowWrap'>{(!project.description) ? "" : project.description } </div>
                                <ul className="image-gallery">
                                    {project.images.map((image, index) => (
                                        <li key={index} onClick={() => setIndex(index)}>
                                            <img src={image.src} alt={image.src}></img>
                                        </li>
                                    ))}
                                </ul>
                                <div className='overflowWrap'>{(!project.longDescription) ? "" : project.longDescription } </div>
                                <Lightbox
                                    open={index >= 0}
                                    index={index}
                                    close={() => setIndex(-1)}
                                    slides={project.images}
                                />                            
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </Jumbotron>
        </div>

    )
})

export default ProjectDetails