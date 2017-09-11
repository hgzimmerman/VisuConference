import * as React from "react";
import "./MyNavbar.css";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavbarState {
    collapsed: boolean;
}

export class MyNavbar extends React.Component {

    public state: NavbarState;

    constructor(props: {}) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: false
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div className="MyNavbar">
                <Navbar color="black" >
                    {/*<NavbarToggler onClick={this.toggleNavbar} />*/}
                    {/*<Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>*/}
                        <NavbarBrand href="/#">VisuConference</NavbarBrand>
                        {/*<Nav navbar>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="/components/">Components</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>*/}
                            {/*</NavItem>*/}
                        {/*</Nav>*/}
                    {/*</Collapse>*/}
                </Navbar>
            </div>
        );
    }
}