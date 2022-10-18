import React from 'react'
import {Carousel} from 'react-bootstrap';
import sisters from '../images/sisters.png'
// import {spons} from '../data'

function Caraousel1() {
  return (
    <Carousel>

        <Carousel.Item>
          <img src={sisters} alt="sisiter" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={sisters} alt="sisiter" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={sisters} alt="sisiter" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={sisters} alt="sisiter" />
        </Carousel.Item>

        {/* {
          spons.map(({imgLink},index)=>{
        return(
          <Carousel.Item>
          <img
          className="d-block w-100"
          src={imgLink}
          alt='img2'
        />
        </Carousel.Item>
        )
          })
        }       */}
  
  
  </Carousel>
  )
}

export default Caraousel1