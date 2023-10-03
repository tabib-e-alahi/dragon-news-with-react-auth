import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="border space-y-6">
            <h2 className="text-xl font-semibold text-left ">All Categories</h2>
            
                {
                    categories.map(category => 
                    <Link 
                        className="block ml-12 text-xl font-medium text-left text-[#9F9F9F]" 
                        key={category.id}
                        to={`/category/${category.id}`}>{category.name}</Link>)
                }
            
        </div>
    );
};

export default LeftSideNav;