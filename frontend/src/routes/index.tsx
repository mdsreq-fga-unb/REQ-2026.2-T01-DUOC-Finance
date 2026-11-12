import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import DashboardPage from "../pages/DashboardPage";
import ColaboradoresPage from "../pages/ColaboradoresPage";

export default function AppRoutes() {
    return (
        <Routes>
            {/* ROTA PAI: Carrega o AppLayout... */}
            <Route path="/" element={<AppLayout />}>
                
                {/* ROTA PADRÃO (index) para dashboard */}
                <Route index element={<DashboardPage />} />

                {/* ROTA para colaboradores */}
                <Route path="colaboradores" element={<ColaboradoresPage />} />
                
                {/* ROTA de fechamento com outras opções para sidebar */}
                <Route
                path="fechamento"
                element={
                    <div className="p-6 bg-surface border border-border rounded-xl shadow-xs">
                    <h2 className="text-xl font-bold text-dark">
                        Fechamento Financeiro
                    </h2>
                    <p className="text-muted mt-1">
                        Tela em desenvolvimento (RF05)...
                    </p>
                    </div>
                }
                />

                {/* ROTA 404: Se o usuário digitar qualquer URL inexistente */}
                <Route
                path="*"
                element={
                    <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-primary">
                        Página não encontrada (404)
                    </h2>
                    <p className="text-muted mt-2">
                        A rota que você tentou acessar não existe.
                    </p>
                    </div>
                }
                />
            </Route>
        </Routes>
    );
}
