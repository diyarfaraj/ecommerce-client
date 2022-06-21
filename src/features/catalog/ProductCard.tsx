import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyFormat } from "../../app/util/util";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  const [loading, setLoading] = useState(false);
  const { setBasket } = useStoreContext();

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <Card>
      <CardHeader
        //avatar={<Avatar>{product.name.charAt(0).toUpperCase()}</Avatar>}
        title={product.name}
      />
      <CardMedia
        component="img"
        height="140"
        sx={{ backgroundSize: "contain", bgcolor: "lightblue" }}
        image={product.imgUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          component={Link}
          to={`/catalog/${product.id}`}
          color="primary"
          aria-label="view more"
        >
          <RemoveRedEyeOutlinedIcon />
        </IconButton>

        <LoadingButton
          loading={loading}
          onClick={() => handleAddItem(product.id)}
          color="primary"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartSharpIcon />
        </LoadingButton>
      </CardActions>
    </Card>
  );
}
