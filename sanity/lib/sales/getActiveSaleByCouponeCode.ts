import {defineQuery} from "next-sanity";
import {couponCode} from "./couponCodes";
import { sanityFetch } from "../live";

//function to get all categories
export const getActiveSaleByCouponCode =async (couponCode : couponCode)=>{
    const All_SALE_BY_COUPON_QUERY = defineQuery(`
        *[_type == "salesType" 
        && isActive ==true
        && couponCode==$couponCode
        ] | order(validFrom desc)[0]
   `);
   
      try {
            //Use sanityFetch to send the query
          const activeSale= await sanityFetch({
            query: All_SALE_BY_COUPON_QUERY,
            params:{
                couponCode,
            },
          });  
          //Return the list of categories or an empty array if none are found
          return activeSale? activeSale.data:null;
        } catch (error) {
         console.error("Error fetching active sale by coupon codes",error);
         return null;   
        }
};

