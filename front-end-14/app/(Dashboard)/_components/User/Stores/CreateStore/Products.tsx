'use client';
import { useState } from "react";
import AddProductDialog from "./Products/AddProductDialog";
import ProductsTables from "./Products/ProductsTables";

export default function Products() {
  const [open, setOpen] = useState(false);
    return (
    <div className=''>
       <ProductsTables open={open}/>
       <AddProductDialog open={open} setOpen={setOpen}/>
    </div>
  )
}