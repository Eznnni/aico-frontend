import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage"; // ����

export default function AppRoutes() {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        {/* �ٸ� ���Ʈ�� */}
        </Routes>
    </Router>
    );
}
