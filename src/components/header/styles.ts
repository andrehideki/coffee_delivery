import styled from "styled-components";

export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;

    padding: 2rem 10rem;

    a {
        font-family: 'Baloo 2', sans-serif !important;
        cursor: pointer;
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`;

export const LocationAnchor = styled.a`
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.625rem;
    border-radius: 8px;

    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple"]};
`;

export const CartAnchor = styled.a`
    display: flex;
    padding: 0.625rem;
    border-radius: 8px;

    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow"]};
`;