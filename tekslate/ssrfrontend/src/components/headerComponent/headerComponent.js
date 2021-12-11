import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridOnIcon from '@material-ui/icons/GridOn';
import { Container } from '@material-ui/core';
import { Fragment } from 'react';
import MobileNav from '../mobileNav/mobileNav';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import Logo from '../../../asset/resource/logo.jpg';
import Logo1 from '../../../asset/resource/logo1.svg';
import Logo2 from '../../../asset/resource/logo2.svg';
import Logo3 from '../../../asset/resource/logo3.svg';
import Logo4 from '../../../asset/resource/logo4.svg';

const useStyles = makeStyles((theme) => ({
  rootNavBar: {
    display: 'grid',
    gridTemplateColumns: '65% auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: '75% auto',
    },
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  },
  rootShortcuts: {
    background: '#e6ecef',
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  },
  rootMobileNav: {
    display: 'none',
    [theme.breakpoints.down("sm")]: {
      display: 'block'
    },
  },
  rootLeftnav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shortcutsNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    '& ul': {
      display: 'flex',
      flexDirection: 'row',
      listStyleType: 'none',
      width: '55%',
      margin: '0.5rem',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down("md")]: {
        width: '70%'
      },
      [theme.breakpoints.down("sm")]: {
        width: '100%'
      },
    },
  },
  megaMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid green'
  },
  input_search: {
    width: '100%',
    color: 'white',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 1px 4px 0 rgb(31 38 74 / 14%)',
    backdropFilter: 'blur(5.5px)',
    // -webkit-backdrop-filter: blur(5.5px);
    borderRadius: '0.25rem 0px 0px 0.25rem',
    border: ' 1px solid #1565c0',
    height: 'calc(1.5em + .75rem + 2px)',
    padding: '10px 5px 10px 40px',
    fontSize: '1rem',
    '&:focus': {
      color: 'black !important',
      backgroundColor: 'white',
      border: 'none !important',
      outline: 'none !important'
    }
  },
  icon_search: {
    position: 'absolute',
    fontSize: '20px',
    marginTop: '10px',
    marginLeft: '10px',
    zIndex: 5,
    color: '#929292',
  },
  search_div: {
    margin: 0,
    display: 'flex',
    color: ' white',
  },
  dropdown: {
    position: 'relative',
    overflow: 'hidden',
  },
  dropdownContent: {
    position: "absolute",
    backgroundColor: "#f9f9f9",
    width: "420px",
    top: '2.5rem',
    left: '-2rem',
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
  column: {
    float: "left",
    width: "33.33%",
    padding: "10px",
    backgroundColor: "#ccc",
    height: "250px",
  },
  column: {
    '& a': {
      float: "none",
      color: "black",
      padding: "16px",
      textDecoration: "none",
      display: "block",
      textAlign: "left",
    },
    '& a:hover': {
      backgroundColor: "#ddd",
    }
  },

  subnav:{
    color:"rgb(58 58 58 / 87%)",
    textDecoration:"none",
    fontWeight:"500",
  },

  row: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridColumnGap: '1rem ',
    minHeight: '50vh',
    padding: '1rem',
    borderRadius: '1rem',
    '&:after': {
      content: "",
      display: "table",
      clear: "both",
    }
  }
}));

const HeaderComponent = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  return (
    <Fragment>
      <div className={classes.rootShortcuts}>
        <Container>
          <div className={classes.shortcutsNav}>
            <ul>
              <li><a className={classes.subnav} target="_blank" href="/blog" >Blog</a></li>
              <li><a className={classes.subnav} target="_blank" href="/corporate-training" >Corporate Training</a></li>
              <li><a className={classes.subnav} target="_blank" href="/become-an-instructor" >Become an Instructor</a></li>
            </ul>
          </div>
        </Container>
      </div>
      <div style={{ boxShadow: '0 2px 8px 0 rgb(0 0 0 / 10%)' }}>
        <Container >
          <div className={classes.rootMobileNav}><MobileNav /></div>
          <div className={classes.rootNavBar}>
            <div className={classes.rootLeftnav}>
              <div>
              <img src={Logo4} style={{width:"150px", height:"100%", margin:"10px 0px"}} />
                {/* <h2>Tekslate</h2> */}
              </div>
              <div style={{ position: 'relative' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<MenuIcon />}
                  className={classes.dropdown}
                  onClick={() => setState(!state)}
                >
                  All courses
                </Button>
                {state ? <div className={classes.dropdownContent}>
                  <div className={classes.row}>
                    <div className={classes.column}>
                      <h3>Category</h3>
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                    <div className={classes.column}>
                      <h3>Category</h3>
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                    <div className={classes.column}>
                      <h3>Category</h3>
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                    <div className={classes.column}>
                      <h3>Category</h3>
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>

                </div> : ''}
              </div>
              <div style={{ width: '420px' }}>
                <form >
                  <div className={classes.search_div} style={{ display: "flex", margin: "0" }}
                  >
                    <SearchIcon className={classes.icon_search} />
                    <input type="hidden" name="searchString" />
                    <input
                      id="search-nav"
                      className={classes.input_search}
                      type="text"
                      placeholder="What do you want to learn"
                      type="search"
                      autocomplete="off"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div>
              <Button variant="outlined" color="primary" href="#outlined-buttons">
                <PersonIcon />&nbsp;Log in
              </Button>
            </div>
          </div>

        </Container>
      </div>
    </Fragment>
  )
}

export default HeaderComponent;
