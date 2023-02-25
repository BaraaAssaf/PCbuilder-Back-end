import Table from "../../components/Table";
import { useFetchContactUsQuery, useRemoveContactUsMutation } from '../../store';
import Button from '../../components/Button';
import Loading from "../../components/Loading";

function ContactUsTable() {
    const { data, error, isFetching } = useFetchContactUsQuery();
    const [removeContactUs, Results] = useRemoveContactUsMutation()
    let content;

    const keyFn = (contactus) => {
        return contactus.ID;
    };

    const handeldelete = (contactusid) => {
        removeContactUs(contactusid)
    }

    if (isFetching || Results.isLoading) {
        content = <Loading />
    } else if (error) {
        content = <div>Error loading.</div>;
    } else {

        const config = [
            {
                label: 'Name ',
                render: (contactus) => <p className="fw-normal mb-1">{contactus.Name}</p>,
            },
            {
                label: 'Email',
                render: (contactus) => <p className="fw-normal mb-1">{contactus.Email}</p>,
            },
            {
                label: 'Subject',
                render: (contactus) => <p className="fw-normal mb-1">{contactus.Subject}</p>,
            },
            {
                label: 'Message',
                render: (contactus) => <p className="fw-normal mb-1">{contactus.Message}</p>,
            },
            {
                label: 'Delete',
                render: (contactus) =>
                    <Button onClick={() => {
                        handeldelete(contactus.ID)
                    }} rounded backgroundColor='#b30000' color='white'> Delete </Button>,
            },
        ];
        content = <Table data={data} config={config} keyFn={keyFn} />;
    }

    return (
        <div className="content-wrapper " >
            <div className="container-fluid" style={{ marginTop: '150px' }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <div>Dashboard</div>
                    </li>
                    <li className="breadcrumb-item active">ContactUs Table</li>
                </ol>

                {content}
            </div>
        </div>
    );
}

export default ContactUsTable;
