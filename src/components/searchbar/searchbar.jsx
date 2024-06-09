import { useState } from 'react'
import './searchbar.scss'
export const Searchbar = () => {
    const [query,setQuery]=useState({
        type:"Buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    });
    const callmeby=()=>{
        setQuery((prev)=>({...prev,type:"Buy"}));
    }
    const callmeRe=()=>{
        setQuery((prev)=>({...prev,type:"Rent"}));
    }
  return (
    <div className="searchbar">
        <div className="type">
            <button onClick={callmeby} className={query.type=='Buy'? 'active':"" }>Buy</button>
            <button onClick={callmeRe} className={query.type=='Rent'? 'active':"" } >Rent</button>
        </div>
        <form>
            <input type="text" name="location" placeholder="City location"/>
            <input type="number" min={0} max={100000000}name="minprice" placeholder="Min Price"/>
            <input type="number" min={0} max={100000000} name="location" placeholder="Max Price"/>
            <button >
                <img src="search.png"/>
            </button>
        </form>

    </div>
  )
}
