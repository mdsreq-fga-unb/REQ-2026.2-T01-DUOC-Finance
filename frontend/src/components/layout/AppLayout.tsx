import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout() {
    return (
        <div className="flex h-screen w-screen bg-canvas text-dark overflow-hidden">
        {/* barra lateral fixa */}
        <Sidebar />

        {/* área direita (header + conteúdo dinâmico das abas) */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
            <Header />

            <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-canvas">
            <div className="max-w-7xl mx-auto">
                {/* react router injeta a pagina aqui... */}

                <Outlet />
            </div>
            </main>
        </div>
        </div>
    );
}
