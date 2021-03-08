import React from 'react'
import useStyles from './styles';

const View = ({addProduct}) => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const {name, price, media, quantity, description} = response;
    setProduct({name, price, media, quantity, description, src: media.source, price: price.formatted_with_symbol,});
  };
  return (
    <div>
      
    </div>
  )
}

export default View
