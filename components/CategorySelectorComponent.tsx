import { Category } from "@/sanity.types";

interface CategorySelectorProps {
    categories: Category[];
}

const CategorySelectorComponent = ({ categories }: CategorySelectorProps) => {
    return (
        <div className="flex flex-col space-y-2">
            {categories.map((category) => (
                <div key={category._id} className="p-2 bg-gray-100 rounded-lg">
                    {category.title}
                </div>
            ))}
        </div>
    );
};

export default CategorySelectorComponent;