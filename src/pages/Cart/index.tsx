import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import { CoffeeCartCard } from "../../components/coffee_cart_card";
import { CoffeeContext } from "../../contexts/coffee_context";
import { CartList, ConfirmButton, Container, OrderForm, PaymentButton } from "./styles";

export function CartPage() {

    const {cart, coffeeList, freight, realizeOrder} = useContext(CoffeeContext);
    const [form, setForm] = useState({
        cep: "",
        logradouro: "",
        numero: "",
        complement: "",
        municipio: "",
        cidade: "",
        uf: "",
        payment: "CREDIT"
    });

    const cartItems = cart.items.map(item => {
        const coffee = coffeeList.find(coffee => coffee.id == item.id);
        if (!coffee) return {};
        return {
            ...coffee,
            ...item
        };
    });

    const itemsTotal = cartItems.map(item => item.price * item.amount).reduce((a, b) => a + b, 0);
    const total = itemsTotal + freight;

    const formatedItemsTotal = itemsTotal.toLocaleString("pt-BR", {minimumFractionDigits: 2});
    const formatedTotal = total.toLocaleString("pt-BR", {minimumFractionDigits: 2});
    const formatedFreight = freight.toLocaleString("pt-BR", {minimumFractionDigits: 2});

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        realizeOrder();
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <OrderForm>
                    <h2>Complete seu pedido</h2>
                    <div>
                        <section>
                            <div>
                                <MapPinLine />
                                <h3>Endereço de entrega</h3>
                            </div>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                            <div>
                                <div>
                                    <input placeholder="CEP" required />
                                </div>
                                <div>
                                    <input placeholder="Logradouro" required />
                                </div>
                                <div>
                                    <input placeholder="Número" required />
                                    <div>
                                        <input placeholder="Complemento" />
                                        <span>Opcional</span>
                                    </div>
                                </div>
                                <div>
                                    <input placeholder="Municipio" required />
                                    <input placeholder="Cidade" required />
                                    <input placeholder="UF" required />
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3>
                                <CurrencyDollar />
                                Pagamento
                            </h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            <div>
                                <PaymentButton 
                                    className={form.payment == "CREDIT"? "active" : ""}
                                    onClick={() => setForm({...form, payment: "CREDIT" })}
                                >
                                    <CreditCard weight="thin" />
                                    <span>CARTÃO DE CRÉDITO</span>
                                </PaymentButton>
                                <PaymentButton 
                                    className={form.payment == "DEBIT"? "active" : ""}
                                    onClick={() => setForm({...form, payment: "DEBIT" })}
                                >
                                    <Bank weight="thin" />
                                    <span>CARTÃO DE DÉBITO</span>
                                </PaymentButton>
                                <PaymentButton 
                                    className={form.payment == "MONEY"? "active" : ""}
                                    onClick={() => setForm({...form, payment: "MONEY" })}
                                >
                                    <Money weight="thin" />
                                    <span>DINHEIRO</span>
                                </PaymentButton>
                            </div>
                        </section>
                    </div>
                </OrderForm>
                <CartList>
                    <h2>Cafés selcionados</h2>
                    <main>
                        <div>
                            {cartItems.map(item => (
                                <CoffeeCartCard key={item.id}
                                    id={item.id}
                                    amount={item.amount}
                                    name={item.name}
                                    picture={item.picture}
                                    price={item.price}
                                />
                            ))}
                        </div>
                        <footer>
                            <div>
                                <span>Total de items</span>
                                <span>R$ {formatedItemsTotal}</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>R$ {formatedFreight}</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>R$ {formatedTotal}</span>
                            </div>
                            <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
                        </footer>
                    </main>
                </CartList>
            </form>
        </Container>
    );
}