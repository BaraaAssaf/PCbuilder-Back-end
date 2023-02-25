
import Loading from '../../components/Loading';
import Search from '../../components/Search';
import { useFetchProductQuery } from '../../store';
import TestMonialForm from './testimonialForm';

function Shop(){
    const { data , error, isFetching } = useFetchProductQuery();
    let content='';

    if (isFetching) {
      content =<Loading/>;
    } else if (error) {
      content = <div>Error loading </div>;
    } else if(data) {
      var user = JSON.parse(localStorage.getItem('userinfo'))[0];
           content =  <>
          
           <Search data={data}/>
            <TestMonialForm  userid={user.ID}/></>
    }
   
    
    return(
<div className="container bg-dark" style={{width:'100%'}}>
<div className="card-deck row" >
     <>
       {content}
     </>
     </div>
     </div>
   )
}

export default Shop;