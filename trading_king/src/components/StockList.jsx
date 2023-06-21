import {useState, useEffect, useContext} from "react";
import finnHub from "../apis/finnHub";
import {BsFillCaretDownFill} from "react-icons/bs";
import {BsFillCaretUpFill} from "react-icons/bs";
import {WatchListContext} from "../context/watchListContext";
import {useNavigate} from 'react-router-dom'

export const StockList = () => {
    const [stock, setStock] = useState([])
    const {watchList} = useContext(WatchListContext)
    const navigate = useNavigate()


    const renderIcon=(change)=>{
        return change > 0 ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>
    }

    const changeColor=(change) =>{
        return change > 0 ? "success" : "danger"
    }
    const handleStockSelect = (symbol) => {
        navigate(`details/${symbol}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.allSettled(
                    watchList.map((stock) => finnHub.get('/quote', { params: { symbol: stock } })));

                const stockData = responses.map((response) => ({
                    data: response.value.data,
                    symbol: response.value.config.params.symbol,
                }));

                console.log(stockData);
                setStock(stockData);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [watchList]);

    return <div>
        <table className="className=table hover mt-5">
            <thead style={{color:"rgb(79,89,102)"}}>
            <tr>
                <th scope='col' className='mr-5'>Name</th>
                <th scope='col' className='mr-5'>Last</th>
                <th scope='col' className='mr-5'>Chg</th>
                <th scope='col' className='mr-5'>Chg%</th>
                <th scope='col' className='mr-5'>High</th>
                <th scope='col' className='mr-5'>Low</th>
                <th scope='col' className='mr-5'>Open</th>
                <th scope='col' className='mr-5'>Close</th>
            </tr>
            </thead>
            <tbody>
                 {stock.map((stockData)=>{
                     return (
                         <tr style={{cursor: 'pointer'}} className='table-row mr-5' onClick={()=> handleStockSelect(stockData.symbol)}  key={stockData.symbol}>
                             <th scope='row'>{stockData.symbol}</th>
                             <td >{stockData.data.c}USD</td>
                             <td className={`text-${changeColor(stockData.data.d)} `}>{stockData.data.d}{renderIcon(stockData.data.d)}</td>

                             <td className={`text-${changeColor(stockData.data.dp)} `}>{stockData.data.dp}{renderIcon(stockData.data.dp)}</td>
                             <td>{stockData.data.h}</td>
                             <td>{stockData.data.l}</td>
                             <td>{stockData.data.o}</td>
                             <td>{stockData.data.pc}</td>
                         </tr>
                     )
                 })}
            </tbody>
        </table>
    </div>
}