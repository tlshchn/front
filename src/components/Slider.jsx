import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'50%'} height={600}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>



      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <img width={'50%'} height={600}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <img width={'50%'} height={600}
        className="d-block w-100"
        src="./img/three.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider