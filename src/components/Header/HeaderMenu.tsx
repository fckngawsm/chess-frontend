import { Divider, Menu, MenuItem } from "@mui/material";

interface HeaderMenuProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: (link: string) => void;
}

export const HeaderMenu = ({
  anchorEl,
  open,
  handleClose,
}: HeaderMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      // @ts-ignore
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={() => handleClose("theme")}>Theme</MenuItem>
      <MenuItem onClick={() => handleClose("preferences")}>
        Preferences
      </MenuItem>
      <MenuItem onClick={() => handleClose("help")}>Help</MenuItem>
      <Divider />
      {/* TODO: добавить лоигку для выхода (отдельная функция) */}
      <MenuItem onClick={() => handleClose("sign-in")}>Log out</MenuItem>
    </Menu>
  );
};
