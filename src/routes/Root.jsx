import { ServerList } from "../components/ServerList";
import { GlobalHeader } from "../components/GlobalHeader.jsx";

export function Root(){
    return (
        <>
            <GlobalHeader />
            <div className="grid">
                <ServerList />
                <main className="container"></main>
            </div>
        </>
    )
}