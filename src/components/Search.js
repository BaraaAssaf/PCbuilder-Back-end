import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';


function Search({ data }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  let content;


  useEffect(() => {
    setFilteredData(data.filter(item =>
      item.Productname.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }, [data, searchQuery]);




  content = filteredData.map((product) => {
    return <ProductCard key={product.ID} product={product} />;
  });

return (
  <div className="container">
     <label htmlFor='search'>Search</label>
    <input name='search' type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />

    <div className="card-deck row">
      <>
        {content}
      </>

    </div>
  </div>

)
    }
export default Search;