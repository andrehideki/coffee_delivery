import styled from "styled-components";

export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;

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

export const Location = styled.div`
    display: flex;
    align-items: center;
    padding: 0.625rem;
    border-radius: 8px;
    background: ${(props) => props.theme["purple-light"]};

    a {
        text-decoration: none !important;
        display: flex;
        align-items: center;
        gap: 0.375rem;
        color: ${(props) => props.theme["purple"]};
    }
`;

export const Cart = styled.a`
    position: relative;
    display: flex;
    padding: 0.625rem;
    border-radius: 8px;
    background: ${(props) => props.theme["yellow-light"]};
    a {
        text-decoration: none !important;
        display: flex;
        align-items: center;
        gap: 0.375rem;
        color: ${(props) => props.theme["yellow-dark"]};
    }   

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        padding: .25rem;
        position: absolute;
        top: -.25rem;
        right: -.25rem;
        background: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme["white"]};
    }
`;