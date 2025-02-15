import { imageUrl } from "@/lib/imageUrl";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation"; // Corrected import for notFound
import Image from "next/image";

async function ProductPage({
    params
}: {
    params: {
        slug: string;
    };
}) {
    const { slug } = await params; // No need to await params, as it's not a Promise
    const product = await getProductBySlug(slug);

    // If the product is not found, return a 404 page
    if (!product) {
        return notFound();
    }

    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Fixed typo in `grid-cols` */}
                {/* Product Image Section */}
                <div className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}>
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

                {/* Product Details Section */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            {product.name}
                        </h1>
                        <div className="text-xl font-semibold mb-4">
                            Ksh {product.price?.toFixed(2)}
                        </div>
                        <div className="prose max-w-none mb-6">{/* Render PortableText if description is an array */}
                        {Array.isArray(product.description) && (
                            <PortableText value={product.description} />
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;