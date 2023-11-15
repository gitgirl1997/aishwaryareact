import resObj from "../utils/mockdata";
import RestroCard from "./RestaurantCard";
import resObj from "../utils/mockdata";
 import { useState } from "react";


const Body =()=>{

    const [listOfRestaurants,setlistOfRestaurants]= useState(resObj);

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                   //filter logic here 
               const filteredRestaurants = listOfRestaurants.filter((res)=> res.info.avgRatingString > 4);
                console.log(filteredRestaurants);
                setlistOfRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='restro-container'>
                {
                listOfRestaurants.map((restaurant) =>(<RestroCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>

        </div>
    )
};
 
export default Body;