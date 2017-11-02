import * as React from "react";
import "./MyNavbar.css";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import * as FontAwesome from "react-fontawesome";
import { Info } from "../info/Info";



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

                <Link className="ml-auto nav-item d-sm-none" to="/group">Connected Users</Link>
                {/*<FontAwesome className="ml-auto nav-item" name="info-circle"/>*/}
                <Info/>

              </nav>
            </div>
        );

    }
}