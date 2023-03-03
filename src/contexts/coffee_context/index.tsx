import { createContext, ReactElement, useState } from "react";
import { v4 as uuid } from "uuid";
import { redirect, useNavigate, useNavigation } from "react-router-dom";

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
    orderForm: OrderForm;
    setOrderForm: (form: OrderForm) => void;
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
    orderForm: {
        cep: "",
        logradouro: "",
        numero: 0,
        complement: "",
        municipio: "",
        cidade: "",
        uf: "",
        payment: "",
    },
    freight: 10,
    addCoffeToCart: () => {},
    decreaseCoffefromCart: () => {},
    removeCoffefromCart: () => {},
    realizeOrder: () => {},
    setOrderForm: (form: OrderForm) => {}
});

export interface OrderForm {
    cep: string;
    logradouro: string;
    numero: number;
    complement?: string;
    municipio: string;
    cidade: string;
    uf: string;
    payment: string;
}

import { number, string, z } from "zod";

const formSchema = z.object({
    cep: string().regex(/^\d{5}-\d{3}$/),
    logradouro: string(),
    numero: string().regex(/^\d+$/),
    complement: string().optional(),
    municipio: string(),
    cidade: string(),
    uf: string().max(2),
    payment: string()
});



export function CoffeeContextProvider({ children }: CoffeContextProps) {
    const navigator = useNavigate();

    const [cart, setCart] = useState<Cart>({ items: [] });
    const [orderForm, setOrderForm] = useState<OrderForm>({
        cep: "02230-111",
        cidade: "Cidade dos passaros",
        complement: "",
        logradouro: "Avenida dos papagaios",
        municipio: "São Paulo",
        numero: 123,
        payment: "CREDIT",
        uf: "SP"
    });
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
        try {
            const data = formSchema.parse(orderForm);
            navigator("finished");
            setCart({ ...cart, items: [] });
        } catch (e) {
            alert("Preencha o formulario corretamente");
        }
    }


    return (
        <CoffeeContext.Provider value={{
            coffeeList,
            cart,
            freight: 10,
            orderForm,
            setOrderForm,
            addCoffeToCart,
            decreaseCoffefromCart,
            removeCoffefromCart,
            realizeOrder
        }}>
            { children }
        </CoffeeContext.Provider>
    );
}