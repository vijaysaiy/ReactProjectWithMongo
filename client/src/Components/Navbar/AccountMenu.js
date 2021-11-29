import React from 'react'
import { MenuOverlay, MenuItem, Menu, Button } from "@momentum-ui/react";
import { Link } from "react-router-dom";

function AccountMenu() {
    return (
        <MenuOverlay
            menuTrigger={
              <Button id="default" ariaLabel="Account" removeStyle>
                Account
              </Button>
            }
          >
            <Menu>
              <Link to="/login">
                <MenuItem label="Sign in" />
              </Link>
              <Link to="/register">
                <MenuItem label="Signup" />
              </Link>
            </Menu>
          </MenuOverlay>
    )
}

export default AccountMenu
