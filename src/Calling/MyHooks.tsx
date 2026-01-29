import { useDocumentTitle } from "../CustomHook/useDocumentTitle"

import StatusBar from "../CustomHook/ApplyHook/OnlineStatus/StatusBar"
import SaveButton from "../CustomHook/ApplyHook/OnlineStatus/SaveButton"
import MyForm from "../CustomHook/ApplyHook/FormInput/MyForm"
import FetchData from "../CustomHook/ApplyHook/Fetch/FetchData"
import MyTheme from "../CustomHook/ApplyHook/Theme/MyTheme"
import SearchComponent from "../CustomHook/ApplyHook/DebouncedValue/SearchComponent"

const MyHooks = () => {
    useDocumentTitle("Example of Custom Hook");

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">useOnlineStatus</div>
                <div className="card-body">
                    <StatusBar />
                    <SaveButton />
                </div>
            </div>

            <div className="card mt-3">
                <div className="card-header">useFormInput</div>
                <div className="card-body">
                    <MyForm />
                </div>
            </div>

            <div className="card mt-3">
                <div className="card-header">useFetch</div>
                <div className="card-body">
                    <FetchData />
                </div>
            </div>

            <div className="card mt-3">
                <div className="card-header">useTheme</div>
                <div className="card-body">
                    <MyTheme />
                </div>
            </div>

            <div className="card mt-3">
                <div className="card-header">useDebouncedValue</div>
                <div className="card-body">
                    <SearchComponent />
                </div>
            </div>

        </div>
    )
}

export default MyHooks