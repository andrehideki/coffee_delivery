import { createContext, ReactElement, useState } from "react";
import { v4 as uuid } from "uuid";
import { redirect } from "react-router-dom";

export interface CoffeContextProps {
    children: ReactElement
}


interface CartItem {
    id: string;
    amount: number;
}

interface Cart {
    items: CartItem[]
}

interface ContextProps {
    coffeeList: any[];
    cart: Cart;
    freight: number;
    addCoffeToCart: (id: string, amount: number) => void;
    decreaseCoffefromCart: (id: string, amount: number) => void;
    removeCoffefromCart: (id: string) => void;
    realizeOrder: () => void;
}

export const CoffeeContext = createContext<ContextProps>({
    coffeeList: [],
    cart: {
        items: []
    },
    freight: 10,
    addCoffeToCart: () => {},
    decreaseCoffefromCart: () => {},
    removeCoffefromCart: () => {},
    realizeOrder: () => {}
});



export function CoffeeContextProvider({ children }: CoffeContextProps) {
    const [cart, setCart] = useState<Cart>({ items: [] });
    const [coffeeList, setCoffeeList] = useState<any[]>([
        { 
            id: uuid(),
            name: "Expresso Tradicional",
            picture: "expresso_tradicional.png",
            tags: ["TRADICIONAL"],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: 9.9
        },
        { 
            id: uuid(),
            name: "Expresso Americano",
            picture: "expresso_americano.png",
            tags: ["TRADICIONAL"],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.9
        },
        { 
            id: uuid(),
            name: "Expresso Cremoso",
            picture: "expresso_cremoso.png",
            tags: ["TRADICIONAL"],
            description: "Café expresso tradicional com espuma cremosa",
            price: 9.9
        },
    ]);

    function addCoffeToCart(id: string, amount: number) {
        const item = cart.items.find(item => item.id === id);
        if (!!item) {
            item.amount += amount;
        } else {
            cart.items.push({
                id,
                amount
            });
        }
        setCart({...cart });
    }

    function decreaseCoffefromCart(id: string, amount: number) {
        const item = cart.items.find(item => item.id === id);
        if (!item) return;
        const decreasedAmount = item.amount - amount;
        if (decreasedAmount <= 0) {
            removeCoffefromCart(id);
        } else {
            item.amount -= amount;
        }
        
        setCart({...cart });
    }

    function removeCoffefromCart(id: string) {
        cart.items = cart.items.filter(item => item.id !== id);
        setCart({...cart });
    }

    function realizeOrder() {

    }


    return (
        <CoffeeContext.Provider value={{
            coffeeList,
            cart,
            freight: 10,
            addCoffeToCart,
            decreaseCoffefromCart,
            removeCoffefromCart,
            realizeOrder
        }}>
            { children }
        </CoffeeContext.Provider>
    );
}