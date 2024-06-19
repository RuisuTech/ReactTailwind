// import styles from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

import Product from "../interfaces/Product";

import { useSelector } from "react-redux";
import { Store } from "../actions/products";

function Home() {
  const text = useSelector((store) => store.products.text);

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const filterData = res.data.filter((each) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);

  return (
    <>
      <NavBar />
      <Hero first="Tecnologia" second="Renovada" />
      <main className="w-full flex justify-center items-center p-[20px] bg-[#edfffe]">
        {/* <div className={styles["product-container"]} id="products"> */}
        <div
          className="w-[1080px] flex flex-wrap justify-between"
          id="products"
        >
          {products.map((each: Product) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              colors={each.colors}
              images={each.images}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
