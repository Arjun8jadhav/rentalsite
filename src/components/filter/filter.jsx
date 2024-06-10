import './filter.scss';
export const Filter = () => {
    return (
        <div className='filter'>
            <h1>Search result for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor='city'>Location</label>
                    <input type='text' id='city' name='city' placeholder='City Loaction' />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor='type'>type</label>
                    <select name='type' id='type'>
                        <option value="any">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor='property'>Property</label>
                    <select name='property' id='property'>
                        <option value="any">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
               
                <div className="item">
                    <label htmlFor='minprice'>Min</label>
                    <input type="number" min={0} max={1000000} id='min' name='minprice' placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor='maxprice'>Max</label>
                    <input type='number' min={0} max={1000000}  id='max' name='maxprice' placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor='bedroom'>Bedroom</label>
                    <input type='text' id='city' name='city' placeholder='any' />
                </div>
                <button>
                    <img src='search.png' alt=''/>
                </button>
            </div>
        </div>
    )
}
