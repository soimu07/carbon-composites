import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import { useParams } from 'react-router-dom';
import { projectsArray } from "./home/Project";
import Col from "react-bootstrap/Col";
import ImageGallery from 'react-image-gallery';
import { Jumbotron } from "./home/migration";
import Container from "react-bootstrap/Container";

const ProjectDetails = React.forwardRef((props, ref) => {
    const {projectId} = useParams();
    const project = projectsArray.find((p) => {
        return p.id === projectId
    });
    const pictures = project.images.map(image => (
    {
        original: image,
        thumbnail: image,
    }))
    return (
        <Jumbotron
            fluid
            id="project-details"
        >
            <Container>
                <div ref={ref}>
                    <Col md={12} className="w-100">
                        <div className="bg-white rounded">
                            <div className='text-center' as="h5">{project.name} </div>
                            <div className="container py-5">
                                {/* {project.images.map(image => <img className="productCardImg" src={image} alt='coverPhoto'></img>)} */}
                                <ImageGallery items={pictures} />
                            </div>
                            <div className='position-absolute '>{(!project.description) ? "" : project.description } </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </Jumbotron>

    )
})

export default ProjectDetails