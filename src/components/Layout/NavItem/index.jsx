import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import useScreenSize from "../../../hooks/useScreenSize";

const NavItem = ({ item, onClick }) => {
  const { isMobile } = useScreenSize();

  return (
    <ListItem
      disablePadding
      onClick={() => {
        isMobile && onClick();
      }}
    >
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
  onClick: PropTypes.func,
};

export default NavItem;
