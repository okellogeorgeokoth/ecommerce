'use client';

import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "cmdk";

interface CategorySelectorProps {
    categories: Category[];
}

export function CategorySelectorComponent({ categories }: CategorySelectorProps) {
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const router = useRouter();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {selectedCategory ? selectedCategory.title : "Filter by Category"}
                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="absolute z-50 w-full min-w-[250px] p-2 bg-white shadow-lg rounded-lg border"
                side="bottom"
                align="start"
            >
                <Command>
                    <CommandInput
                        placeholder="Search category..."
                        className="h-9 w-full px-2 py-1 border rounded"
                    />
                    <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                            {categories.map((category) => (
                                <CommandItem
                                    key={category._id}
                                    value={category.title}
                                    className="flex items-center justify-between cursor-pointer px-3 py-2 rounded hover:bg-gray-100"
                                    onSelect={(value) => {
                                        const selected = categories.find(cat => cat.title === value);
                                        if (selected) {
                                            setSelectedCategory(selected);
                                            router.push(`/categories/${selected.slug?.current}`);
                                            setOpen(false);
                                        }
                                    }}
                                >
                                    {category.title}
                                    {selectedCategory?._id === category._id && (
                                        <Check className="ml-2 h-4 text-green-600" />
                                    )}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
