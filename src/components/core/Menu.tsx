import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";

type TMenu = {
  id: string;
  element: JSX.Element;
};

type TPropTypes = {
  list: TMenu[];
  anchorRef: React.RefObject<HTMLButtonElement>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ list, anchorRef, open, setOpen }: TPropTypes) => {
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
              >
                {list.map((item) => (
                  <MenuItem key={item.id} onClick={handleClose}>
                    {item.element}
                  </MenuItem>
                ))}
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default Menu;
