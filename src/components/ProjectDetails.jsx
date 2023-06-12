import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState} from "react";
import { useParams} from 'react-router-dom';
import { projectsArray } from "./home/Project";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "./home/migration";
import Container from "react-bootstrap/Container";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'

const ProjectDetails = React.forwardRef((props, ref) => {
    const [index, setIndex] = useState(-1);
    const {projectId} = useParams();
    const project = projectsArray.find((p) => {
        return p.id === projectId
    });

    return (
        <div className="projectDetailsContainer">
        <Jumbotron
            fluid
            id="project-details"
        >
            <Container >
                <div ref={ref} >
                    <Col md={12} className="w-100">
                        <div className="rounded">
                            <div className='text-center' as="h5">{project.name} </div>
                            <div className="container imagesContainer py-5">
                            <ImageGallery items={project.images} additionalClass="imagesGallery" />
                            </div>
                            <div className='position-absolute '>{(!project.description) ? "" : project.description } </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </Jumbotron>
        </div>

    )
})

export default ProjectDetails