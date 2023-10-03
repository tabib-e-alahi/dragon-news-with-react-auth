import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
  return (
    <div>
      <div className="p-2 space-y-3 mb-6">
        <h2 className="text-xl font-semibold text-left">Login With</h2>

        <button className="btn btn-outline btn-info w-full normal-case">
          <FaGoogle></FaGoogle> Login with Google
        </button>

        <button className="btn btn-outline  w-full normal-case">
          <FaGithub></FaGithub> Login with GitHub
        </button>
      </div>

      <div className="p-2   mb-6">
        <h2 className="text-xl font-semibold text-left mb-3">Find Us On</h2>

        <a className="p-4 flex items-center gap-2.5 font-medium border rounded-t-lg" href="">
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a className="p-4 flex items-center gap-2.5 font-medium border-x " href="">
          <FaTwitter></FaTwitter> Twitter
        </a>
        <a className="p-4 flex items-center gap-2.5 font-medium border rounded-b-lg" href="">
          <FaInstagram></FaInstagram> Instagram
        </a>
      </div>

      <div className="p-3 space-y-3 mb-6 bg-[#F3F3F3] rounded-sm ">
        <h2 className="text-xl font-semibold text-left">QZone</h2>

        <img className="" src={qZone1} alt="" />
        <img className="" src={qZone2} alt="" />
        <img className="" src={qZone3} alt="" />

      </div>

    </div>
  );
};

export default RightSideNav;
