import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import { CoffeeCartCard } from "../../components/coffee_cart_card";
import { CoffeeContext } from "../../contexts/coffee_context";
import { CartList, ConfirmButton, Container, OrderForm, PaymentButton } from "./styles";


export function CartPage() {
    const {cart, coffeeList, freight, orderForm, realizeOrder, setOrderForm } = useContext(CoffeeContext);

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
                                    <input 
                                        id="cep"  
                                        name="cep"
                                        onChange={({target}) => setOrderForm({...orderForm, [target.name]: target.value})}
                                        placeholder="CEP" 
                                        required />
                                </div>
                                <div>
                                    <input 
                                        id="logradouro"  
                                        name="logradouro"
                                        onChange={({target}) => setOrderForm({...orderForm, [target.name]: target.value})}
                                        placeholder="Logradouro" 
                                        required />
                                </div>
                                <div>
                                    <input 
                                        id="numero"  
                                        name="numero"
                                        onChange={({target}) => 
                                        setOrderForm({...orderForm, [target.name]: target.value})}
                                        placeholder="Número" required />
                                    <div>
                                        <input 
                                            id="complemento"  
                                            name="complemento"
                                            onChange={({target}) => 
                                            setOrderForm({...orderForm, [target.name]: target.value})}
                                            placeholder="Complemento" />
                                        <span>Opcional</span>
                                    </div>
                                </div>
                                <div>
                                    <input 
                                        id="municipio"  
                                        name="municipio"
                                        onChange={({target}) => 
                                        setOrderForm({...orderForm, [target.name]: target.value})}
                                        placeholder="Municipio" required />
                                    <input 
                                        id="cidade"  
                                        name="cidade"
                                        onChange={({target}) => 
                                        setOrderForm({...orderForm, [target.name]: target.value})}
                                        placeholder="Cidade" required />
                                    <input 
                                         id="uf"  
                                         name="uf"
                                         onChange={({target}) => 
                                         setOrderForm({...orderForm, [target.name]: target.value})}
                                        placeholder="UF" required />
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
                                    className={orderForm.payment == "CREDIT"? "active" : ""}
                                    onClick={() => setOrderForm({...orderForm, payment: "CREDIT" })}
                                >
                                    <CreditCard weight="thin" />
                                    <span>CARTÃO DE CRÉDITO</span>
                                </PaymentButton>
                                <PaymentButton 
                                    className={orderForm.payment == "DEBIT"? "active" : ""}
                                    onClick={() => setOrderForm({...orderForm, payment: "DEBIT" })}
                                >
                                    <Bank weight="thin" />
                                    <span>CARTÃO DE DÉBITO</span>
                                </PaymentButton>
                                <PaymentButton 
                                    className={orderForm.payment == "MONEY"? "active" : ""}
                                    onClick={() => setOrderForm({...orderForm, payment: "MONEY" })}
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