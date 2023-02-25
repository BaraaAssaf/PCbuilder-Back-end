import Table from "../../components/Table";
import { useFetchTestimonialQuery, useEditTestimonialMutation } from '../../store';
import Button from '../../components/Button';
import Loading from "../../components/Loading";

function TestMonialTable() {
    const { data, error, isFetching } = useFetchTestimonialQuery();
    const [editTestimonial , Results] = useEditTestimonialMutation()
    let content;

    const keyFn = (testimonial) => {
        return testimonial.ID;
    };

    const handelupdate = (testimonial) => {
        editTestimonial(testimonial)
    }

    if (isFetching || Results.isLoading) {
        content = <Loading/>;
    } else if (error) {
        content = <div>Error loading.</div>;
    } else {

        const config = [
            {
                label: 'imgae',
                render: (testimonial) => <>
                    <img className="img-account-profile rounded-circle mb-2" src={`data:image/jpeg;base64,${testimonial.image}`} alt="" style={{ width: "60px" }} />
                </>,
            },
            {
                label: 'Name ',
                render: (testimonial) => <p className="fw-normal mb-1">{testimonial.FirstName} {testimonial.LastName}</p>,
            },
            {
                label: 'Message ',
                render: (testimonial) => <p className="fw-normal mb-1">{testimonial.Message}</p>,
            },
            {
                label: 'Status',
                render: (testimonial) => <p className="fw-normal mb-1">{testimonial.Status}</p>,
            },
            {
                label: 'Show in home page',
                render: (testimonial) =>
                    <Button onClick={() => {
                        handelupdate({ ID: testimonial.ID, Status: "show" })
                    }} rounded backgroundColor='#000066
                    ' color='white'> Show </Button>
                ,
            },
            {
                label: 'Hide in home page',
                render: (testimonial) =>
                    <Button onClick={() => { handelupdate({ ID: testimonial.ID, Status: "hide" }) }} rounded backgroundColor='#b30000' color='white'> Hide </Button>
                ,
            },
        ];
        content = <Table data={data} config={config} keyFn={keyFn} />;
    }

    return (
        <div className="content-wrapper " >
        <div className="container-fluid" style={{marginTop:'150px'}}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <div>Dashboard</div>
            </li>
            <li className="breadcrumb-item active">TestMonial Table</li>
          </ol>
          {content}
        </div>
        </div>
    );
}

export default TestMonialTable;
