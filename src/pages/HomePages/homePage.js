
import imgback from  '../../images/5.jpg'

function HomePage() {
 return(
    <>
<header className="bg-dark py-5 ">
<div className="container px-5 bg-dark shadow-5">
<div className="row gx-5 align-items-center justify-content-center">
    <div className="col-lg-8 col-xl-7 col-xxl-6">
        <div className="my-5 text-center text-xl-start">
            <h1 className="display-5 fw-bolder text-white mb-2">Welcome To PC Builder</h1>
            <p className="lead fw-normal text-white-50 mb-4">Register Now & Enjoy In The First Purchase.</p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
         
            </div>
        </div>
    </div>
    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center shadow-5">
      <img className="img-fluid rounded-3 my-5 shadow-inner" src={imgback} alt="..." />
      </div>
</div>
</div>
</header>


 </>
    )
}

export default HomePage;
