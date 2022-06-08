import { Store } from "react-notifications-component";


export const notify = (message) => {
    Store.addNotification({
        message,
        type: "success",
        container: "top-right",
        dismiss: {
            duration: 2000
        }
    });
}