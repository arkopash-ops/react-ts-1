import { useEffect, useState } from "react"

export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const forOnline = () => { setIsOnline(true) }
        const forOffline = () => { setIsOnline(false) }

        window.addEventListener('online', forOnline);
        window.addEventListener('offline', forOffline);

        return () => {
            window.removeEventListener('online', forOnline);
            window.removeEventListener('offline', forOffline);
        }
    }, []);

    return isOnline;
}
