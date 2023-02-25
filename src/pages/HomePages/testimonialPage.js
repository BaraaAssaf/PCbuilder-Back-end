import Loading from '../../components/Loading';
import { useFetchshowTestimonialQuery } from '../../store';


function TestMonialPage()
{
    const { data , error, isFetching } = useFetchshowTestimonialQuery();
    let content='';

    if (isFetching) {
      content =<Loading/>;
    } else if (error) {
      content = <div>Error loading </div>;
    } else if(data) {
           content = data.map((element)=>
           {
            
                return(
                    <div className="carousel-item">
                    <p className="lead font-italic mx-4 mx-md-5 text-black">
                     {element.Message}
                    </p>
                    <div className="mt-5 mb-4">
                      <img src={`data:image/jpeg;base64,${element.image}`}
                        className="rounded-circle img-fluid shadow-1-strong" alt="smapleimage" width="70"
                        height="70" />
                    </div>
                    <p className="text-muted mb-0 text-black">{element.FirstName} {element.LastName}</p>
                  </div>
                )

           })
    }
   

    return(
<>
        <section>
  <div className="row text-center container bg-dark" >
    <div className="col-md-12">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <h1>
                     TestMonials
                    </h1>
            <div className="mt-5 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid shadow-1-strong" alt="smapleimage" width="100"
                height="100" />
            </div>
            <p className="text-muted mb-0 text-black">Next To See TestMonial</p>
          </div>

           {content}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  </div>
</section>
</>
    )
}

export default TestMonialPage