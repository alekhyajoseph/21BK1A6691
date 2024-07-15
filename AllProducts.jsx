import { Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ company: '', category: '', minPrice: 0, maxPrice: 10000, topN: 10 });

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(filters.company, filters.category, filters.minPrice, filters.maxPrice, filters.topN);
      setProducts(data);
    };
    getProducts();
  }, [filters]);

  return (
<div>
      <TextField label="Company" onChange={(e) => setFilters({ ...filters, company: e.target.value })} />
      <TextField label="Category" onChange={(e) => setFilters({ ...filters, category: e.target.value })} />
      <TextField label="Min Price" type="number" onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
      <TextField label="Max Price" type="number" onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
      <TextField label="Top N" type="number" onChange={(e) => setFilters({ ...filters, topN: e.target.value })} />
      <Button onClick={() => setFilters(filters)}>Filter</Button>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllProducts;
