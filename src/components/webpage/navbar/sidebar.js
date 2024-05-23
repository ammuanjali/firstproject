import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Divider, useMediaQuery, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 240;

const Sidebar = () => {
  const [openUsers, setOpenUsers] = useState(false);
  const [openUserRoles, setOpenUserRoles] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleUsersClick = () => {
    setOpenUsers(!openUsers);
  };

  const handleUserRolesClick = () => {
    setOpenUserRoles(!openUserRoles);
  };

  const handleCoursesClick = () => {
    setOpenCourses(!openCourses);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={openDrawer ? handleDrawerClose : handleDrawerOpen}>
            {openDrawer ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            variant="temporary"
            anchor="left"
            open={openDrawer}
            onClose={handleDrawerClose}
          >
            <div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button onClick={handleUsersClick}>
                <ListItemIcon><PeopleIcon /></ListItemIcon>
                <ListItemText primary="Users" />
                {openUsers ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openUsers} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button component={Link} to="/allusers">
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="All Users" />
                  </ListItem>
                  <ListItem button component={Link} to="/adduser">
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Add User" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                    <ListItemText primary="User Roles" />
                    {openUserRoles ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openUserRoles} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button>
                        <ListItemIcon><GroupIcon /></ListItemIcon>
                        <ListItemText primary="User Groups" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
              <ListItem button onClick={handleCoursesClick}>
                <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                <ListItemText primary="Courses" />
                {openCourses ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openCourses} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                    <ListItemText primary="Course Manager" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                    <ListItemText primary="Certificates" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Drawer>
        </>
      ) : (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="left"
          open={true}
        >
          <div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={handleUsersClick}>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Users" />
              {openUsers ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openUsers} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/allusers">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="All Users" />
                </ListItem>
                <ListItem button component={Link} to="/adduser">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Add User" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                  <ListItemText primary="User Roles" />
                  {openUserRoles ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openUserRoles} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button>
                      <ListItemIcon><GroupIcon /></ListItemIcon>
                      <ListItemText primary="User Groups" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Collapse>
            <ListItem button onClick={handleCoursesClick}>
              <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
              <ListItemText primary="Courses" />
              {openCourses ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCourses} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                  <ListItemText primary="Course Manager" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                  <ListItemText primary="Certificates" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
