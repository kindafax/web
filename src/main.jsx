import { createRoot } from "react-dom/client";
import { Hello } from "./Hello.jsx";

const root = createRoot( document.getElementById("root") )
root.render(<Hello />)