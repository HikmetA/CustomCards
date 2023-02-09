import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
    padding: 10px;
    font-size: 18px;
    padding: 20px
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    color: red;
    padding: 10px;
    &:hover {
        color: black;
    }
`
export {NavStyle, LinkStyle};