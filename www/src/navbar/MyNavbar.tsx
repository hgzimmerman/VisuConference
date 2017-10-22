import * as React from "react";
import "./MyNavbar.css";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import {Link} from "react-router-dom";



class NavbarState {
    collapsed: boolean;
}

export class MyNavbar extends React.Component {

    public state: NavbarState;

    constructor(props: {}) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            collapsed: false
        };
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div className="MyNavbar bg-dark">
              <nav className="navbar-dark navbar" >
                <a className="navbar-brand" href="#">VisuConference</a>



                  <ul className="navbar-nav d-sm-none ">
                    <li className="nav-item">
                      <Link to="/group">ChatRoom</Link>
                    </li>
                  </ul>


              </nav>




                {/*<Navbar color="light">*/}
                    {/*<NavbarBrand href="/#">VisuConference</NavbarBrand>*/}
                    {/*<NavbarToggler onClick={this.toggle} />*/}

                    {/*<Collapse isOpen={this.state.collapsed} >*/}
                      {/*<Nav className="ml-auto" >*/}
                        {/*<NavItem>*/}
                          {/*<NavLink href="#">Send Invite Link</NavLink>*/}
                        {/*</NavItem>*/}
                      {/*</Nav>*/}
                    {/*</Collapse>*/}
                {/*</Navbar>*/}
            </div>
        );
    }
}