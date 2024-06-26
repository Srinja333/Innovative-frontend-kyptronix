import React, { useState, useEffect } from "react";
import ProductsByCategory from "../Components/ProductsComponents/ProductsByCategory";
import ServiceFooter from "../Components/ServicesComponents/ServiceFooter";
import Discover from "../Components/ProductsComponents/Discover";
import TopBar from "../Components/TopBar/TopBar";
import productsBg from "../assets/products-top-bar.png";
import { fetchCategories, fetchProducts } from "../api-calls/apiCalls";
import { useNavigate } from "react-router-dom";

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
const navigate=useNavigate()

  useEffect(() => {
    const fetcher = async () => {
      const categoriesData = await fetchCategories()
      if (categoriesData?.message === "jwt expired") {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
        return navigate("/login");
      } else if (localStorage.getItem('cart')===null||localStorage.getItem('user_email')===null) {
        localStorage.removeItem("cart")
        localStorage.removeItem("token")
        localStorage.removeItem("user_email")
         navigate("/login");
      } else {
      setCategories([...categoriesData])
      }
      const productsData = await fetchProducts()
      if (productsData?.message === "jwt expired"||productsData?.message ===  "jwt not present") {
        navigate("/login");
      } else {
      setProducts([...productsData])
      }
    }

    fetcher()
  }, [])

  if(products){
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <TopBar page={"products"} bg={productsBg} />

      {categories && categories.length !== 0 && <ProductsByCategory categories={categories} products={products} />}

      <div style={{ marginTop: "5%" }}>
        <Discover />
      </div>

      <div style={{ marginTop: "5%" }}>
        <ServiceFooter />
      </div>
    </div>
  )}
}

export default Products;
