import BannerDonate from './BannerDonate';
import FormDonate from './FormDonate';

function DonateCard() {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 flex items-center justify-center pb-10 pt-10">
        <BannerDonate />
        <FormDonate />
    </div>
  );
}

export default DonateCard;
