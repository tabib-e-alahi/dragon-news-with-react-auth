// import PropTypes from 'prop-types';

import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
    
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="md:col-span-2">
            <h2 className="text-4xl">News Coming Soon.....</h2>
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
