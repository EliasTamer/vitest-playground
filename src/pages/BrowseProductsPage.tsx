import { useState } from "react";
import CategorySelect from "../components/CategorySelect";
import ProductTable from "../components/ProductTable";
import "react-loading-skeleton/dist/skeleton.css";

function BrowseProducts() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    number | undefined
  >();

  return (
    <div>
      <h1>Products</h1>
      <div className="max-w-xs">
        <CategorySelect
          onChange={(categoryId) => setSelectedCategoryId(categoryId)}
        />
      </div>
      <ProductTable selectedCategoryId={selectedCategoryId} />
    </div>
  );
}

export default BrowseProducts;
