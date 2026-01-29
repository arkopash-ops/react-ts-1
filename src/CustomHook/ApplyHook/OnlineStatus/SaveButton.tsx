import { useOnlineStatus } from "../../useOnlineStatus"

const SaveButton = () => {
    const isOnline = useOnlineStatus();

    const handleSaveClick = () => alert("Progress Saved!")

    return (
        <button
            className={isOnline ? "btn btn-success" : "btn btn-secondary"}
            disabled={!isOnline}
            onClick={handleSaveClick}
        >
            {isOnline ? 'Save Your Progress' : 'Connecting...'}
        </button>
    );
}

export default SaveButton