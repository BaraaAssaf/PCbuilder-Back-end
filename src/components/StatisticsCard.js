import React from 'react';
import { useStatisticsQuery } from '../store';
import { FcList } from 'react-icons/fc'
import Loading from './Loading';

function StatisticsCard() {
  const { data, error, isFetching } = useStatisticsQuery();
  let content;


  if (isFetching) {
    content = <Loading />
  } else if (error) {
    content = <div>Error loading </div>;
  } else {


    content = data.map((item) => {


      return (
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments"><FcList /></i>
              </div>
              <div className="mr-5">{item.value}</div>
            </div>
            <div className="card-footer text-white clearfix small z-1">
              <span className="float-left">{item.label}</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </div>
          </div>
        </div>

      )
    })

  }

  return (

    <div className="row">

      {content}
    </div>

  );

}
export default StatisticsCard;                 