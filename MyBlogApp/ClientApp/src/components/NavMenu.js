import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';


const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

 class NavMenu extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAuthenticated : this.props.isAuthenticated,
      user: this.props.user

    };
    
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    console.log('Change props ');
    this.setState({
      isAuthenticated: nextProps.isAuthenticated,
      user: nextProps.user
        
    });
}

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    console.log("Navbar" ,this.props)
    const {isAuthenticated, user } = this.state;

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
          <Container>
            <NavbarBrand tag={Link} to="/">MyBlogApp</NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem>
                { !isAuthenticated &&
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/login">Вхід</NavLink>
                </NavItem>                
                }

                {isAuthenticated &&
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/login">{user.name}</NavLink>
                </NavItem>
                }


              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}


const mapState = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    user: state.login.user

  }
}


NavMenu.propTypes = propTypes;


// export default NavMenu;

export default connect(mapState)(NavMenu);
