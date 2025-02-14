import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

function ProductThumb({ product }: { product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <Link 
            href={`/product/${product.slug?.current}`} 
            className={`group flex bg-slate-400 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
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
        </Link>
    );
}

export default ProductThumb;