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
    <Col md={4} onClick={onClick} className='mb-4 productCardContainer fontFamilyCursive'>
      <Card className="shadow-lg p-3 bg-white rounded h-100 d-flex">
      <Card.Title className='text-center' as="h5">{name} </Card.Title>
      <Card.Body className="d-flex flex-column h-100 ">         
        <img className="productCardImg" src={images[0].src} alt='coverPhoto'></img>
        <Card.Text className="flex-shrink-1">{(!description) ? "" : description } </Card.Text>
        {/* {images.map((image)=><img src={image} alt="aaaa" className="w-100"></img> )} */}
      </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
