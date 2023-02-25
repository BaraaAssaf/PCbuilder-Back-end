


function Loading()
{


    return(
        <> 
        <div className='d-flex justify-content-center  bg-dark opacity-50' style={{
          position: 'fixed',
          display: 'block',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          right: '0',
          bottom: '100px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: '2',
          cursor: 'pointer',
          }}>
          <div>
  
        </div>
  
        </div>
        <div className="spinner-border text-success " style={{ textAlign: 'center'}}> 
        <span className='sr-only'> loading.... </span>
        </div>
        </>
        
    )
}

export default Loading;