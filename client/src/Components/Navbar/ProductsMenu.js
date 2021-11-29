import React from "react";
import { MenuOverlay, MenuItem, Menu, Button } from "@momentum-ui/react";
import { Link } from "react-router-dom";

function ProductsMenu() {
  return (
    <MenuOverlay
      menuTrigger={
        <Button id="default" ariaLabel="Products" removeStyle>
          Products
        </Button>
      }
    >
      <Menu>
        <Link to="/products/all">
          <MenuItem label="All" />
        </Link>
        <Link to="/products/mobiles">
          <MenuItem label="Mobiles" />
        </Link>
        <Link to="/products/accesories">
          <MenuItem label="Accessories" />
        </Link>
        <Link to="/products/earphones">
          <MenuItem label="Earphones" />
        </Link>
      </Menu>
    </MenuOverlay>
  );
}

export default ProductsMenu;
