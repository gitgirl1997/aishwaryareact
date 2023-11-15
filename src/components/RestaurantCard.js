import {CDN_URL} from "../utils/constants.js";

const RestroCard =(props) =>{
    const {resData} = props;
        console.log(resData)
    
    const {cloudinaryImageId,name,avgRatingString,costForTwo,cuisines} = resData?.info;
    
        return (
            <div className='restaurant-card' style={{background:"rgb(240 240 240)"}} >
                <img className='bir' src={CDN_URL + cloudinaryImageId} ></img>
                <h3>{name}</h3>
                <h4>Stars:{avgRatingString}</h4>
                <h4>{costForTwo}</h4>
                <h4 style={{wordBreak:"break-all"}}>{cuisines.join(",")}</h4>
            </div>
        )
    }

    export default RestroCard;