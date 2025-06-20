import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const formatPrice = (price) => {
    return `${price} ${language === "fr" ? "DA/Kg" : "دج/كغ"}`;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src = "/placeholder.jpg";
          }}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">{formatPrice(product.price)}</p>
        <button className="command-button" onClick={() => navigate("/contact")}>
          {language === "fr" ? "Commander" : "اطلب الآن"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
