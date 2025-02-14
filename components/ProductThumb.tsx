import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

function ProductThumb({ product }: { product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <Link 
            href={`/product/${product.slug?.current}`} 
            className={`group flex flex-col bg-slate-400 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
            style={{ width: "300px", height: "300px" }} // Explicit dimensions for the parent container
        >
            <div className="relative aspect-square w-full h-full overflow-hidden">
                {product.image && (
                    <Image 
                        className="object-cover transition-transform duration-300 group-hover:scale-105" 
                        src={imageUrl(product.image).url()} 
                        alt={product.name || "Product image"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
                {/* Out of Stock Overlay */}
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span className="text-white font-bold text-lg">Out of Stock</span>
                    </div>
                )}
            </div>
            <div className="P-4 text-center">
                <h2 className="text-lg font-semibold text-white truncate">
                    {product.name}
                    </h2> 
                    <p className="mt-2 text-sm text-gray-800 line-clamp-2">
                        {product.description
                         ?.map((block) =>
                        block._type === "block" // Check if the block type is "block"
                         ? block.children
                        ?.map((child) => child.text) // Extract text from each child
                     .join("") // Join the text into a single string
                     : "" // Return an empty string for non-block types
                     )
                    .join("") || "No description available"} 
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">Ksh{product.price?.toFixed(2)}</p>
            </div>
        </Link>
    );
}

export default ProductThumb;