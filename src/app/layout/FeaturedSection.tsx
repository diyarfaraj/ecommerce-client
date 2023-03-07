import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
  padding: 20px;

  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide > div {
    padding: 0 10px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 8px;
  }
`;

const FeaturedSection: React.FC = () => {
  // add your featured items data here
  const { products } = useProducts();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Wrapper>
      <Typography variant="h4">Our best sellers</Typography>
      <Slider {...settings}>
        {products.map((product) => (
          <Link key={product.id} to={`/catalog/${product.id}`}>
            <Box>
              <img src={product.imgUrl} alt={product.name} />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1" className="description">
                {product.description}
              </Typography>
            </Box>
          </Link>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default FeaturedSection;
