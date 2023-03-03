import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { LayoutContainer } from "./styles";

export function LayoutPage() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    );
}