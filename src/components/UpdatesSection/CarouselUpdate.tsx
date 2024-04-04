import { Carousel } from 'react-responsive-carousel';
import Pic from "../../assets/img/esteban.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function CarouselUpdate() {
  return (
    <div className='w-1/2 mx-auto mt-10 mb-10'>
      <Carousel 
      showArrows={true} 
      infiniteLoop={true} 
      showThumbs={false} 
      showStatus={false} 
      autoPlay={true} 
      interval={3000}
    >
      <div>
        <img src={Pic} />
      </div>
      <div>
        <img src={Pic}/>
      </div>
      <div>
        <img src={Pic} />
      </div>
    </Carousel>
    </div>
  )
}

export default CarouselUpdate