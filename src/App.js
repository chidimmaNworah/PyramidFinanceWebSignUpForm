import { logo } from './assets';
import { PhoneSlider, DownloadLinks, SignUpForm } from './components';

const App = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center w-full h-full sm:h-screen">
      <div className="w-[80%] bg-white shadow-[0_48px_128px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col sm:flex-row">
          <PhoneSlider />
          <div className="w-full sm:w-3/5 flex flex-col justify-start px-14">
            <div className="flex flex-row gap-2 mt-10 items-center">
              <img src={logo} alt="logo" />
              <p className="font-bold text-[1rem] text-gray-950">Capzul</p>
            </div>
            <div className="flex flex-col mt-6">
              <p className="font-semibold text-[1.5rem] text-gray-950">
                Create account{' '}
              </p>
              <p className="font-light text-[0.8rem] text-gray-900">
                For business, band or celebrity
              </p>
            </div>
            <SignUpForm />
            <DownloadLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
