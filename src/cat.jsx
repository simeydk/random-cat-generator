import React from "react";
import { getCatUrl } from "./getCatUrl";
import useRefresh from './useRefresh';

const Cat = () => {
    const [url, refresh] = useRefresh(getCatUrl)
    return(
        <div>
            <img src={url} alt="cat" />
            <button onClick={refresh}>Refresh</button>
        </div>
    )      
}

export default Cat