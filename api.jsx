import axios from 'axios';

export const fetchProducts = async (company, category, minPrice, maxPrice, topN) => {
  const response = await axios.get(http://78.244.56.144/test/companies/${company}/categories/${category}/products/top-${topN}, {
    params: { minPrice, maxPrice }
  });
  return response.data;
};
