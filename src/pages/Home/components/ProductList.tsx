import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card';
import { getProductList } from '../../../utils/requests/api';
import ProductDialog from './ProductDialog';

const ProductList: React.FC = () => {
  const [data, setData] = useState({ raw: [] });
  const [loading, setLoading] = useState(true);

  const handleDataLoad = async () => {
    const response = await getProductList();

    setData({
      raw: response.data,
    });

    setLoading(false);
  };

  useEffect(() => {
    handleDataLoad();
  }, []);

  return (
    loading
      ? <div>carregando</div>
      : (
        <>

          {data.raw.map(({
            id,
            productCover,
            productName,
            productDescription,
            productPrice,
          }) => (
              <Card
                id={id}
                cover={productCover}
                title={productName}
                description={productDescription}
                currency="R$"
                price={productPrice}
                EditDialog={ProductDialog}
              />
            ))}
        </>
      )
  );
};

export default ProductList;
