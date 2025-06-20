import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import ProductCard from "../components/ProductCard/ProductCard";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <h1>{t.productsPage.title}</h1>
      {loading ? (
        <div className="loading">{t.productsPage.loading}</div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              orderButtonText={t.productsPage.orderButton}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
