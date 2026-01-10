'use client';
import CategoryCarousel from '@/components/Products/CategoryCarousel';
import SidebarFilter from '@/components/Products/SidebarFilter';
import TopSearchBar from '@/components/Products/TopSearchBar';
import { categories } from '@/components/Products/productData';

const Products = () => {
  const foilingCategory = categories.find(cat => cat.name === 'Foiling');

  return (
    <div className="flex mt-[100px] ">
      <SidebarFilter />
      <div className="ml-[280px] w-full">
        <TopSearchBar />
        <CategoryCarousel category={foilingCategory} />
      </div>
    </div>
  );
};

export default Products;
