import {SocketProvider} from "../../context/SocketContext";
import Matchmaking from "../../component/Matchmaking";


export function Home() {

    return (
        <SocketProvider>
            <Matchmaking />
        </SocketProvider>
    );
}
