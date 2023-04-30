import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductDetail } from './actions/productActions';

const Detail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);
  const { allProductsId } = useParams();

  useEffect(() => {
    // Verificar que el ID sea válido
    if (allProductsId && allProductsId !== '0') {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, allProductsId]);

  // Verificar si existe el producto antes de mostrar la información
  if (!product.product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div>
      <div className={d.img}>
        <img src={product.product.image} />
      </div>
      <p>Rating: {product.product.rating}</p>
      <h2>${product.product.price}</h2>
      <h3>{product.product.description}</h3>
    </div>
  );
};

export default Detail;
