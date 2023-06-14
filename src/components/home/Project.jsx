import React from "react";
import { useNavigate  } from 'react-router-dom';
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";


export const projectsArray = [{
  id: '11147652127',
  name: 'R1150GS Cover, starter motor',
  description: 'Original product code: 11147652127',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      // width: 320,
      // height: 240,

    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      // width: 600,
      // height: 800,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      // width: 800,
      // height: 600,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      // width: 600,
      // height: 800,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      // width: 600,
      // height: 800,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      // width: 800,
      // height: 600,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      // width: 600,
      // height: 800,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      // width: 600,
      // height: 800,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      thumbnail:  'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      // width: 320,
      // height: 240,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
      // width: 600,
      // height: 800,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      // width: 600,
      // height: 800,
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      // width: 800,
      // height: 600,
    }
  ],
},
{
  id: '46632328686',
  name: 'R1150GS Cover top',
  description: 'Original product code: 46632328686',
  images: [
    {
      src:'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      thumbnail:'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      // width: 600,
      // height: 800
    },
    {
      src:'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      thumbnail:'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686225847/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_vlmkvh.png',
      // width: 600,
      // height: 800
    }],
},
{
  id: '71607652330',
  name: 'R1150GS Set hand protector',
  description: 'Original product code: 71607652330',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
      // width: 800,
      // height: 600
    }
  ],
},
{
  id: 'Dacia 1300 Hood',
  name: 'Dacia 1300 Hood',
  description: 'Original product code: NaN',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227452/CarbonComposites/Banner/Screenshot_2023-06-08_152453_v3lpcm.png',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227452/CarbonComposites/Banner/Screenshot_2023-06-08_152453_v3lpcm.png',
      // width: 800,
      // height: 600
    }],
},
{
  id: '46637671732',
  name: 'R1150GS COVERING RIGHT',
  description: 'Original product code: 46637671732',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686226622/CarbonComposites/R1150GS/COVERING%20RIGHT%2046637671732/20230309_163316_euwswp.jpg',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686226622/CarbonComposites/R1150GS/COVERING%20RIGHT%2046637671732/20230309_163316_euwswp.jpg',
      // width: 800,
      // height: 600
    }],
},
{
  id: 'Dacia 1300 Spoiler',
  name: 'Dacia 1300 Spoiler',
  description: 'Original product code: Nan',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686230619/CarbonComposites/Banner/20230424_092015_ocuhaq.jpg',
      thumbnail: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686230619/CarbonComposites/Banner/20230424_092015_ocuhaq.jpg',
      // width: 800,
      // height: 600
    }],
}]  

const Project = ({heading}) => {
  const navigate = useNavigate ()
  const handleOnClick = (id) => {
    navigate(`projects/${id}` , {replace: true});
  }
  
  return (
    <div className="projectsBackground">
    <Jumbotron fluid id="projects">
      <div className="m-0">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row className="d-flex">
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
                onClick = {() => handleOnClick(project.id)}
              />
            ))
            : console.log(123)
            }
        </Row>
      </div>
    </Jumbotron>
    </div>
  );
};

export default Project;
