import { useOnlineStatus } from "../../useOnlineStatus"

const StatusBar = () => {
    const isOnline = useOnlineStatus();

    return (
        <h1>
            {
                isOnline
                    ? <div className="text-success">User is Online.</div>
                    : <div className="text-danger">Offline. Pease try again later.</div>
            }
        </h1>
    )
}

export default StatusBar