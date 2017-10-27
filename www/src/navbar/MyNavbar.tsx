import * as React from "react";
import "./MyNavbar.css";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import * as FontAwesome from "react-fontawesome";



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
            <div className="">
              <nav className="navbar-dark bg-dark navbar navbar-expand-md" >
                <a className="navbar-brand" href="#">VisuConference</a>

                 {/*<ul className="navbar-nav ml-auto">*/}
                    {/*<li className="nav-item d-sm-none">*/}
                      <Link className="ml-auto nav-item d-sm-none" to="/group">Connected Users</Link>
                    {/*</li>*/}
                    {/*<li className={"nav-item"}>*/}
                      {/*<Link className="ml-auto nav-item" to="#">*/}
                        <FontAwesome className="ml-auto nav-item" name="info-circle"/>
                      {/*</Link>*/}
                    {/*</li>*/}
                  {/*</ul>*/}



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