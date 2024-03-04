import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/product.json';
import '../components/css/ProductDetail.css';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(id));
    setSelectedProduct(product);
  }, [id]);

  const changeThumbnail = (index) => {
    setSelectedThumbnail(index);
  };

  const navigateThumbnails = (direction) => {
    const newIndex =
      direction === 'up'
        ? selectedThumbnail - 1
        : selectedThumbnail + 1;

    if (newIndex >= 0 && newIndex < selectedProduct.images.length) {
      setSelectedThumbnail(newIndex);
    }
  };

  if (!selectedProduct) {
    return <div className="error-container">Producto no encontrado</div>;
  }

  return (
    <>
      {/* Primer bloque */}
      <div className="productDetail-header">
        <div className="productDetail-header-title-left">
          <h1>{selectedProduct.title}</h1>
        </div>
        <div className="productDetail-header-right">
          <Link to="/">
            <button>Volver Atrás</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="product-container">
          <div className="product-images">
            <img
              src={process.env.PUBLIC_URL + '/images/product/' + selectedProduct.images[selectedThumbnail]}
              alt={`Producto ${selectedProduct.id} Imagen principal`}
              className="main-image"
              />
            <div className="thumbnail-container">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={process.env.PUBLIC_URL + '/images/product/' + image}
                  alt={`Producto ${selectedProduct.id} Imagen ${index + 1}`}
                  className={`product-thumbnail ${
                    index === selectedThumbnail ? 'selected' : ''
                  }`}
                  onClick={() => changeThumbnail(index)}
                />
              ))}
            </div>
          </div>
          <div className="product-details">
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
