import React from 'react';
import { IconButton, Typography, Toolbar, AppBar, Badge, CssBaseline, Grid } from '@material-ui/core';
import { LocalGroceryStore, AccountCircle, MoreVert } from '@material-ui/icons';
import { Sidebar } from '../';

export default class extends React.Component {
  state = {
    open: true
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleDrawer, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleDrawer, false);
  }

  handleDrawer = () => {
    if (window.innerWidth < 959) {
      this.setState({ open: false })
    } else {
      if (!this.state.open) {
        this.setState({ open: true })
      }
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open });

  render() {

    return (
      <div>
        <AppBar className="app-bar">
          <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            E-Bazaar
          </Typography>
            <div className="grow-1" />
              <IconButton color="inherit">
                <Badge badgeContent={1} color="secondary">
                  <AccountCircle />
                </Badge>
              </IconButton>

              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <LocalGroceryStore />
                </Badge>
              </IconButton>
            
              <IconButton color="inherit">
                <MoreVert />
              </IconButton>
          </Toolbar>
        </AppBar>
          <div className="top-spacer" />
          <Grid container>
            <Grid item xs={12} sm={2} md={2} className="sidebar-wrapper">
              <Sidebar />
            </Grid>
            <Grid item xs={12} sm={10} md={10}>
              {this.props.children}
            </Grid>
          </Grid>
      </div>
    );
  }
}