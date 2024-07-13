import { useEffect, useState } from "react";
import { fetchProducts, selectProducts } from "../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    // Extract unique categories from products
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
    );
    setCategories(uniqueCategories);
  }, [products]);

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true))
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([+e.target.value, priceRange[1]]);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };
  const handleClearFilters = () => {
    setSearchTerm("");
    setCategory("");
    setPriceRange([0, 1000]);
    setSortOrder("asc");
  };

  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between items-center my-5 gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="select select-accent w-full max-w-xs"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="select select-accent w-full max-w-xs"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={handlePriceRangeChange}
          className="range range-accent"
        />

        <button
          className="bg-black text-white px-3 py-2 text-sm rounded-md"
          onClick={handleClearFilters}
        >
          Reset
        </button>
      </div>
      <h2 className="text-xl font-bold text-gray-950 sm:text-3xl text-center my-10">
        All Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mx-auto my-10">
        {filteredProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
