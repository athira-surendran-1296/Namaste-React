/** This is a custom hook to check if the app is running in offline mode or not */

import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;