import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-2">
            <button className="btn bg-red-500 hover:bg-red-500">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/'>My Name is tabib and this is the braking news...</Link>
                <Link className="mx-16" to='/'>My Name is tabib and this is the braking news...</Link>
                <Link to='/'>My Name is tabib and this is the braking news....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;