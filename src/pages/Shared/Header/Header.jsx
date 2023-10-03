import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className="mt-5 mb-2.5 text-[#706F6F] text-lg">Journalism Without Fear or Favour</p>
            <p className="text-xl text-[#403F3F]">{moment().format("dddd, MMMM D, YYYY")}</p>
            
        </div>
    );
};

export default Header;