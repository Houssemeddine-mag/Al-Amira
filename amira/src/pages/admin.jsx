import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import "../styles/Admin.css";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert image to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setForm(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setForm({ name: "", description: "", price: "", image: "" });
    setImagePreview(null);
    setEditingId(null);
  };

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingId) {
        // Update existing product
        await updateDoc(doc(db, "products", editingId), form);
      } else {
        // Add new product
        await addDoc(collection(db, "products"), form);
      }

      // Reset form and fetch updated products
      setForm({ name: "", description: "", price: "", image: "" });
      setImagePreview(null);
      setEditingId(null);
      await fetchProducts();
      
      alert(editingId ? "Produit modifié avec succès!" : "Produit ajouté avec succès!");
    } catch (error) {
      console.error("Error saving product:", error);
      alert(`Erreur: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    });
    setImagePreview(product.image);
    setEditingId(product.id);
    window.scrollTo(0, 0);
  };

  // Delete product
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit?")) {
      try {
        // Delete product from Firestore
        await deleteDoc(doc(db, "products", id));
        fetchProducts();
        alert("Produit supprimé avec succès!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Erreur lors de la suppression du produit");
      }
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-navbar">Admin Panel</div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>
          {editingId
            ? "Modifier le produit"
            : "Ajouter un nouveau produit"}
        </h2>
        <input
          placeholder="Nom du produit"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          placeholder="Prix"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <div className="image-upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required={!editingId}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>
        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {loading
              ? "Enregistrement..."
              : editingId
              ? "Modifier"
              : "Ajouter"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="cancel-button"
            >
              Annuler
            </button>
          )}
        </div>
      </form>

      <div className="admin-products-list">
        <h2>Produits existants</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div className="product-info">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="price">{product.price}</p>
                </div>
              </div>
              <div className="product-actions">
                <button
                  onClick={() => handleEdit(product)}
                  className="edit-button"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="delete-button"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
