import App2 from "@/component/App2";
import {
    AvatarCreator,
    AvatarCreatorConfig,
    AvatarExportedEvent,
    UserSetEvent
} from "@readyplayerme/react-avatar-creator";
import {SocketProvider} from "@/context/SocketContext";
import Matchmaking from "@/component/Matchmaking";


export function Home() {
return (
    // <>
    //     <AvatarCreator subdomain="test-x5jtk7" config={config} style={style} onUserSet={handleOnUserSet} onAvatarExported={handleOnAvatarExported} />
    //     {/*<App2/>*/}
    // </>
    <SocketProvider>
        <Matchmaking />
    </SocketProvider>
    )
}
