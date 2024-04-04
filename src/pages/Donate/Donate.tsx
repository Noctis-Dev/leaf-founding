import DonateCard from '../../components/Donate/DonateCard';
import DonateProgress from '../../components/DonateProgress/DonateProgress';
import SectionSelect from './SectionSelect';

function Donate() {
  return (
    <div className='h-full container mx-auto'>
      <DonateCard />
      <DonateProgress />
      <SectionSelect/>
      
    </div>
  )
}

export default Donate