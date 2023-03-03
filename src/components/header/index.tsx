import React, { useContext } from "react";
import { Cart, HeaderContainer, Location } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../../contexts/coffee_context";

export function Header() {
    const {cart, orderForm} = useContext(CoffeeContext);

    const numberOfCartItems = cart.items.map(item => item.amount).reduce((a, b) => a + b, 0);
    const isCartEmpty = numberOfCartItems <= 0;
    const isUserLocationDefined = !!orderForm.municipio && !!orderForm.uf;
    const formatedUserLocation = `${orderForm.municipio}, ${orderForm.uf}`;

    return (
        <HeaderContainer>
            <Link to={"/"}>
                <img src={logo}/>
            </Link>
            <div>
                {isUserLocationDefined &&
                    <Location>
                        <Link to={isCartEmpty? "/" : "/cart"}>
                            <MapPin size={32} weight="fill" />
                            <span>{formatedUserLocation}</span>
                        </Link>
                    </Location>
                }
                <Cart>
                    <Link to={isCartEmpty? "/" : "/cart"}>
                        {!isCartEmpty && <span>{numberOfCartItems}</span>}
                        <ShoppingCart size={32} weight="fill" />
                    </Link>
                </Cart>
            </div>
        </HeaderContainer>
    );
}