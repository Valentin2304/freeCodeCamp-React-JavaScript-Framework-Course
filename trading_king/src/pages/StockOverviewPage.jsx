import {AutoComplete} from "../components/AutoComplete";
import {StockList} from "../components/StockList";
export const StockOverviewPage = () => {
    return <div className="text-center fw-bold fs-5">
        <AutoComplete/>
        <StockList/>
        </div>
}