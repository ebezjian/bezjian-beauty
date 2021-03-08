import {Grid, Button, Container, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {commerce} from "../../lib/commerce";
import {useState, useEffect} from 'react'
import "./styles.css";
const createMarkup = (text) => {
  return {__html: text};
};
const View = ({onAddToCart}) => {
 ;
  const [product, setProducts] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (id) => {
    const response = await commerce.products.retrieve(id);
    const {name, price, media, quantity, description} = response;
    setProducts({id, name, quantity, description, src: media.source, price: price.formatted_with_symbol,});
  };
  useEffect(() => {
    const id = window.location.pathname.split('/');
    fetchProducts(id[2]);
  }, []);

  const handleQuantity = (param) => {
    if (param === "decreases" && quantity > 1) {
      setQuantity(quantity -1);
    }
    if (param === "increases" && quantity < 10) {
      setQuantity(quantity +1);
    }
  };
  return (
    <Container className="product-view">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className="image-wrapper">
          <img 
          // onLoad {() => { setLoading(false); }}
          src={product.src}
          alt={product.name} />
        </Grid>
        <Grid item xs={12} md={4} className="text">
          <Typography variant="h2">{product.name}</Typography>
          <Typography variant="p" dangerouslySetInnerHTML={createMarkup(product.description)}/>
          <Typography variant ="h3">Price: {product.price}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                size="small"
                variant="contained"
                className="increase"
                onClick={() => { 
                  handleQuantity("increases");
                }}
                > + </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" className="quantity">
                Quantity: {quantity}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {handleQuantity("decreases");}}> -
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
              size="large"
              className="custom-button"
              onClick={() => {onAddToCart(product.id, quantity);
              }}>
                <ShoppingCart/> Add to Cart
              </Button>
            </Grid>  
          </Grid>
        </Grid>
      </Grid>      
    </Container>
  );
};

export default View
