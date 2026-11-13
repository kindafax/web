import { createRoot } from "react-dom/client";
import { Root } from "./routes/Root.jsx"
import { HashRouter, Route, Routes, } from "react-router";
import "../static/styles.css";


const root = createRoot( document.getElementById("root") )
root.render(
    <HashRouter>
        <Routes>
            <Route index path="/" element={<Root />} />
            <Route path="*" element={<Root />} />
        </Routes>
    </HashRouter>
)