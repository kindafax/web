import { NavLink  } from "react-router";
import { BsPlusLg } from "react-icons/bs";
import { Spinner } from "./Spinner";

export function ServerListButton() {
    return (
        <li>
            <NavLink className="a" to={"/server/1"}>
                Poo        
            </NavLink>
        </li>
    )
}

export function ServerJoinButton() {
    return (
        <NavLink className="join-server-button" to={"/join"}>
            <div>
                <BsPlusLg />
            </div>
            <div>
                Join Server
            </div>
        </NavLink>
    )
}

export function ServerList(){
    return (
        <nav id="server-list">
            <div>
                <Spinner />
            </div>
            {/* <ul>
                <ServerListButton />
            </ul> */}
            <ServerJoinButton />
        </nav>
    )
}