import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ value, onClick }) => {
  const {
    name,
    description,
    images
  } = value;
  
  return (
    <Col md={6} className='123' onClick={onClick}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body className="">
         <Card.Title className='text-center' as="h5">{name} </Card.Title>
          <div className="d-flex">
            <img className="productCardImg" src={images[0].src} alt='coverPhoto'></img>
          </div>
          <Card.Text className='position-absolute '>{(!description) ? "" : description } </Card.Text>
          {/* {images.map((image)=><img src={image} alt="aaaa" className="w-100"></img> )} */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
