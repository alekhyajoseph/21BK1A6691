import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  // Assuming product details are passed through location state or fetched again
  const product = {}; // Replace with actual product data

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography>Company: {product.company}</Typography>
        <Typography>Category: {product.category}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
