import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={item.path}>
        <ListItemIcon>
          {item?.iconComponent ? item?.iconComponent : <InboxIcon />}
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NavItem;
