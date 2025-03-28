import React, { ReactNode, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import styles from "./styles.module.scss";
import { DASHBOARD_LIST } from "../../utils/constants";

const drawerWidth = 240;
const collapsedWidth = 60;

const Sidebar = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box component={"div"} className={styles.sidebarWrapper}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : collapsedWidth,
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar
          className={styles.toolbarWrapper}
          sx={{
            justifyContent: open ? "space-between" : "center",
          }}
        >
          {open && (
            <Box component={"img"} src="/assets/images/logo.svg" alt="Logo" />
          )}

          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              transform: open ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s",
              color: "var(--sidebar-color)",
              fontSize: "12px",
              border: "1px solid var(--sidebar-color)",
              p: "1px",
            }}
          >
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </Toolbar>
        {open && (
          <Typography
            sx={{
              px: 2.5,
              textTransform: "uppercase",
              color: "var(--sidebar-light-text-color)",
              fontSize: "14px",
            }}
          >
            Main
          </Typography>
        )}
        <List>
          {DASHBOARD_LIST.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto" }}>
                  {React.createElement(item.icon)}
                </ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mb: 3 }} />
        {open && (
          <Typography
            sx={{
              px: 2.5,
              textTransform: "uppercase",
              color: "var(--sidebar-light-text-color)",
              fontSize: "14px",
            }}
          >
            Management
          </Typography>
        )}
        <List>
          {DASHBOARD_LIST.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto" }}>
                  {React.createElement(item.icon)}
                </ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </Box>
  );
};

export default Sidebar;
