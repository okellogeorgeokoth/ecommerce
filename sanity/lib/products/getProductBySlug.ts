import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live"; // Import the sanityFetch function

/**
 * Fetches a product by its slug.
 * 
 * @param {string} slug - The slug of the product to fetch.
 * @returns {Promise<Object|null>} - Returns the product object if found, otherwise returns null.
 */
export const getProductBySlug = async (slug: string) => {
    // Define the GROQ query to fetch a product by its slug
    const PRODUCT_BY_SLUG_QUERY = defineQuery(`
        *[_type == "product" && slug.current == $slug] | order(name asc) [0]
    `);

    try {
        // Use sanityFetch to execute the query
        const products = await sanityFetch({
            query: PRODUCT_BY_SLUG_QUERY,
            params: {
                slug, // Pass the slug as a parameter
            },
        });

        // Return the product data if found, otherwise return null
        return products?.data || null;
    } catch (error) {
        // Log the error if the query fails
        console.error("Error fetching products by slug:", error);
        return null; // Return null in case of an error
    }
};