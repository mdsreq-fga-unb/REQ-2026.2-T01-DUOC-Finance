import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout() {
    // Em telas pequenas a sidebar vira um menu deslizante (RNF02)
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="flex h-dvh w-full bg-canvas text-dark overflow-hidden">
        {/* barra lateral fixa (desktop) / gaveta (mobile) */}
        <Sidebar aberta={menuAberto} onFechar={() => setMenuAberto(false)} />

        {/* área direita (header + conteúdo dinâmico das abas) */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
            <Header onAbrirMenu={() => setMenuAberto(true)} />

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-canvas">
            <div className="max-w-7xl mx-auto">
                {/* react router injeta a pagina aqui... */}

                <Outlet />
            </div>
            </main>
        </div>
        </div>
    );
}
