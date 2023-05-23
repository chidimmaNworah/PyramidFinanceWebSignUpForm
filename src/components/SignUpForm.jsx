import { BiCalendar } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

const SignUpForm = () => {
  return (
    <div className="w-full mt-6">
      <form action="">
        <div className="flex flex-row w-full gap-4 mb-2">
          <div className="w-full">
            <label className="text-gray-900 text-[0.6rem]">First name</label>
            <input
              type="text"
              className="w-full h-8 bg-white p-3 text-left rounded-[3px] border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-border-400"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-900 text-[0.6rem]">Last name</label>
            <input
              type="text"
              className="w-full h-8 bg-white p-3 text-left rounded-[3px] border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-border-400"
            />
          </div>
        </div>
        <div className="flex flex-row w-full gap-4 mb-2">
          <div className="w-full">
            <label className="text-gray-900 text-[0.6rem]">
              Email or phone number
            </label>
            <input
              type="text"
              className="w-full h-8 bg-white p-3 text-left rounded-[3px] border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-border-400"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-900 text-[0.6rem]">
              Date of birth (MM/DD/YY)
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full h-8 bg-white p-3 text-left rounded-[3px] border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-border-400"
              />
              <span className="absolute inset-y-0 right-1 pl-3 flex flex-row items-center pointer-events-none">
                <BiCalendar className="text-gray-400" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-4 mb-2">
          <div className="w-full">
            <label className="text-gray-900 text-[0.6rem]">Password</label>
            <input
              type="text"
              className="w-full h-8 bg-white p-3 text-left rounded-[3px] border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-border-400"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-900 text-[0.6rem]">
              Confirm Password
            </label>
            <input
              type="text"
              className="w-full h-8 bg-white p-3 text-left rounded-[3px] border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-border-400"
            />
          </div>
        </div>
        <div className="flex flex-row w-full justify-between w-full">
          <div className="flex flex-row gap-2 w-full items-center">
            <input
              type="checkbox"
              value="rememberMe"
              className="h-8 bg-white rounded-[3px] "
            />
            <label for="rememberMe" className="text-gray-900 text-[0.6rem]">
              Remember me
            </label>
          </div>
          <div className="w-full flex flex-row items-center justify-end">
            <a href="/" className="text-blue-500 text-xs">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full items-center -mt-2">
          <input
            type="checkbox"
            value="rememberMe"
            className="h-8 bg-white rounded-[3px] "
          />
          <label for="rememberMe" className="text-gray-900 text-[0.6rem]">
            I agree to all the <span className="text-blue-400">Terms</span> and{' '}
            <span className="text-blue-400">Privacy policy</span>
          </label>
        </div>
        <div className="flex flex-row w-full my-4 gap-4">
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-center text-white text-sm rounded-[3px]"
          >
            Create account
          </button>

          <button
            type="text"
            className="w-full h-10 bg-gray-800 text-center text-white text-sm rounded-[3px] flex flex-row items-center justify-center gap-2"
          >
            <FcGoogle className="text-[1.5rem]" /> Sign-in with google
          </button>
        </div>
        <p className="text-gray-900 text-[0.6rem] text-center">
          Don't have an account? <span className="text-blue-400">Log in</span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
