import {defineQuery} from "next-sanity";
import {sanityFetch} from "../live";

export const searchCategoryByName =async (searchParam:string)=>{
    const CATEGORY_SEARCH_QUERY = defineQuery(` //define query is vital for typegen
       *[_type=="category" && name match $searchParam] | order(name asc)
   `);
   
        try {
            //Use sanityFetch to send the query and pass the search parameter with a wildcard
          const categories= await sanityFetch({
            query: CATEGORY_SEARCH_QUERY,
            params:{
                searchParam:`${searchParam}*`,//append wildcard for partial match
            },
          });  
          //Return the list of products or an empty array if none are found
          return categories.data|| [];
        } catch (error) {
         console.error("Error fetching  category by name",error);
         return [];   
        }
};

