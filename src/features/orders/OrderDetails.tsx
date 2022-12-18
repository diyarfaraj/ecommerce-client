import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Order } from "../../app/models/order";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

interface OrderDetailsProps {
  location: {
    state: {
      [key: string]: number;
    };
  };
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ location: { state } }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Orders.fetch(state.id)
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (order === null) return <LoadingComponent />;

  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Order #{order.id}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Buyer ID: {order.buyerId}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Shipping Address
          </Typography>
          <Typography variant="body1">
            {order.shippingAdress.fullName}
          </Typography>
          <Typography variant="body1">
            {order.shippingAdress.address1}
          </Typography>
          <Typography variant="body1">
            {order.shippingAdress.address2}
          </Typography>
          <Typography variant="body1">
            {order.shippingAdress.city}, {order.shippingAdress.state}{" "}
            {order.shippingAdress.zip}
          </Typography>
          <Typography variant="body1">
            {order.shippingAdress.country}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Order Date: {order.orderDate}
          </Typography>
          <Typography variant="h6" component="h2">
            Order Items:
          </Typography>
          <List>
            {order.orderItems?.map((item) => (
              <ListItem key={item.productId}>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${item.quantity} | Price: ${item.price}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Subtotal: {order.subTotal}
          </Typography>
          <Typography variant="h6" component="h2">
            Delivery Fee: {order.deliveryFee}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h2">
            Order Status: {order.orderStatus}
          </Typography>
          <Typography variant="h6" component="h2">
            Total: {order.total}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderDetails;
