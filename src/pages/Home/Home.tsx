import BannerOne from '../../components/Banners/BannerOne';
import BannerTwo from '../../components/Banners/BannerTwo';
import BannerThree from '../../components/Banners/BannerThree';
import CarouselCardsOne from '../../components/CarouselCards/CarouselCardsOne';
import CarouselCardstwo from '../../components/CarouselCards/CarouselCardsTwo';
import CarouselCardsthree from '../../components/CarouselCards/CarouselCardsThree';

function Home() {
  return (
    <div  className="">
      <BannerOne />
      <CarouselCardsOne />
      <BannerTwo />
      <CarouselCardstwo />
      <BannerThree />
      <CarouselCardsthree />
    </div>
  )
}

export default Home