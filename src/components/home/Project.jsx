import React from "react";
import { useNavigate  } from 'react-router-dom';
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";


export const projectsArray = [
  {
    id: '46632328686',
    name: 'R1150GS Cover top',
    description: 'Original product code: 46632328686',
    longDescription:'Made out of 3 infused layers of carbon fiber 210g/m2',
    weightReduction:'Weight reduction: around 240g',
    images: [
      {
        src:'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687158298/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-08_150245_iw7fo1.jpg',
      },
      {
        src:'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687336842/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-21_114023_hqwo9s.jpg',
      },
      {
        src:'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687336842/CarbonComposites/R1150GS/Windscreen%20Cluster%20cover%2046632328686%20COVER%2CTOP/Screenshot_2023-06-21_114000_niu99b.jpg',
      },     

      ],
  },
  {
  id: '11147652127',
  name: 'R1150GS Cover, starter motor',
  description: 'Original product code: 11147652127',
  longDescription:'Made out chopped carbon fiber.',
  weightReduction:'Weight reduction: around 25g',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686224916/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/20230219_120744_chm1mr.jpg',
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687337044/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/Screenshot_2023-06-21_114320_otvzi8.jpg',
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687337044/CarbonComposites/R1150GS/COVER%2C%20STARTER%20MOTOR%2011147652127/Screenshot_2023-06-21_114258_yt9yqh.jpg',
    },
  ],
},

{
  id: '71607652330',
  name: 'R1150GS Set hand protector',
  description: 'Original product code: 71607652330',
  longDescription:'Made out of 2 layers of infused carbon fiber 210g/m2 into the part.',
  weightReduction:'Weight reduction: around 25g',

  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227274/CarbonComposites/R1150GS/SET%20HAND%20PROTECTOR%2071607652330%20%2B%20Touratech%20extensions/Screenshot_2023-06-08_152651_zitbbl.png',
    }
  ],
},
{
  id: 'Dacia 1300 Hood',
  name: 'Dacia 1300 Hood',
  description: 'Original product code: Couldn`t be found',
  longDescription:'My 1st big project, hand laminated with lots of complications, I will never try something like this again. The structure on the back and the hood are each made out of 3 layers of carbon fiber 210g/m2.',
  weightReduction:'Weight reduction: 15kg',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686227452/CarbonComposites/Banner/Screenshot_2023-06-08_152453_v3lpcm.png',
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687337619/CarbonComposites/Banner/Screenshot_2023-06-21_115322_fueuov.jpg',
    },
  ],
},
{
  id: '46637671732',
  name: 'R1150GS COVERING RIGHT',
  description: 'Original product code: 46637671732',
  longDescription:'My 1st even carbon fiber parts, hand laminated. Both are attached by 3D printed clips',
  weightReduction:'Weight reduction: 2 layers: 43g / 4layers : -2g',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686226622/CarbonComposites/R1150GS/COVERING%20RIGHT%2046637671732/20230309_163316_euwswp.jpg',
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687337295/CarbonComposites/R1150GS/COVERING%20RIGHT%2046637671732/Screenshot_2023-06-21_114728_so0zln.jpg',
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687337294/CarbonComposites/R1150GS/COVERING%20RIGHT%2046637671732/Screenshot_2023-06-21_114642_qs9s0x.jpg',
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687337295/CarbonComposites/R1150GS/COVERING%20RIGHT%2046637671732/Screenshot_2023-06-21_114702_fx6u2o.jpg',
    },
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1687337294/CarbonComposites/R1150GS/COVERING%20RIGHT%2046637671732/Screenshot_2023-06-21_114742_cdfdhk.jpg',
    },
  ],
},
{
  id: 'Dacia 1300 Spoiler',
  name: 'Dacia 1300 Spoiler',
  description: 'Original product code: Non-existent',
  longDescription:'Work in progress',
  images: [
    {
      src: 'https://res.cloudinary.com/dt3kx30lt/image/upload/v1686230619/CarbonComposites/Banner/20230424_092015_ocuhaq.jpg',
    }],
}]  

const Project = ({heading}) => {
  const navigate = useNavigate ()
  const handleOnClick = (id) => {
    navigate(`projects/${id}` , {replace: true});
  }
  
  return (
    <div className="projectsBackground">
    <Jumbotron fluid id="projects" className='d-flex'>
      <div className="m-0">
        <h2 className="display-4 pb-5 text-center fontFamilyMonospace">{heading}</h2>
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
