import React from "react";
import {Link} from 'react-router-dom';
import { LinkStyle } from "./styled";
import { NavStyle } from "./styled";
class Navigation extends React.Component{
    render(){
        return <NavStyle >
            <LinkStyle to='/'>
                Home
            </LinkStyle>
            <LinkStyle to='Single'>
                Single
            </LinkStyle>
        </NavStyle>
    }
}
export default Navigation;