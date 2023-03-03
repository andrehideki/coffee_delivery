import { Container, LeftContainer, Location, Time, Payement, RightContainer, Fieldset } from "./styles";
import delivery from "../../assets/delivery.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/coffee_context";

export function RealizedOrder() {
    
    const {orderForm} = useContext(CoffeeContext);

    return (
        <Container>
            <LeftContainer>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <Fieldset>
                    <Location>
                        <div>
                            <MapPin weight="fill" />
                        </div>
                        <div>
                            <p>Entrega em <b>{orderForm.logradouro}, {orderForm.numero}</b></p>
                            <p>{orderForm.municipio} - {orderForm.cidade}, {orderForm.uf}</p>
                        </div>
                    </Location>
                    <Time>
                        <div>
                            <Timer weight="fill" />
                        </div>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><b>20 min - 30 min</b></p>
                        </div>
                    </Time>
                    <Payement>
                        <div>
                            <CurrencyDollar weight="fill" />
                        </div>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p>
                                <b>
                                    {orderForm.payment == "CREDIT" && "Cartão de crédito"}
                                    {orderForm.payment == "DEBIT" && "Cartão de débito"}
                                    {orderForm.payment == "MONEY" && "Dinheiro"}
                                </b>
                            </p>
                        </div>
                    </Payement>
                </Fieldset>
            </LeftContainer>
            <RightContainer>
                <img src={delivery} />
            </RightContainer>
        </Container>
    );
}