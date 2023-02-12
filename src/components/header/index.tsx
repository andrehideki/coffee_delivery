import React from "react";
import { CartAnchor, HeaderContainer, LocationAnchor } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../../public/logo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <a href="/">
                <img src={logo}/>
            </a>
            <div>
                <LocationAnchor>
                    <MapPin size={32} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </LocationAnchor>
                <CartAnchor>
                    <ShoppingCart size={32} weight="fill" />
                </CartAnchor>
            </div>
        </HeaderContainer>
    );
}