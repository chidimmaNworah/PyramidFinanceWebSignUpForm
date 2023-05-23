import { googleplay } from '../assets';
import { BsApple } from 'react-icons/bs';

const DownloadLinks = () => {
  return (
    <div className="flex flex-row mt-12 pb-10 gap-4">
      <button
        type="text"
        className="h-10 bg-gray-950 text-left px-1 py-1 text-white text-sm rounded-[4px] flex flex-row items-center gap-1"
      >
        <img src={googleplay} alt="googleplay" width={30} />
        <div>
          <p className="text-[8px] mb-1">GET IT ON</p>
          <p className="text-sm -mt-3">Google Play</p>
        </div>
      </button>
      <button
        type="text"
        className="h-10 bg-gray-950 text-left px-1 py-1 text-white text-sm rounded-[4px] flex flex-row items-center gap-1"
      >
        <BsApple className="text-[1.5rem]" />
        <div>
          <p className="text-[8px] mb-1">GET IT ON</p>
          <p className="text-sm -mt-3">App Store</p>
        </div>
      </button>
    </div>
  );
};

export default DownloadLinks;
