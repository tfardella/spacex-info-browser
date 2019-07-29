import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import {SpaceXApiUrls} from '../actions'
import { infoFetchData } from '../actions/info';

import './SpaceXCompanyInfo.css'

function SpaceXCompanyInfo ({info, fetchInfoData}) {
  useEffect(() => {
    async function fetchData() {
      const result = await fetchInfoData(SpaceXApiUrls.COMPANY_INFO);
      return(result)  
    }

    fetchData();
  },[fetchInfoData]);

  let data = null;

  if(info) {
    data =
    <div className='company_info'>
      <div><label>CEO:</label> {info.ceo}</div>
      <div><label>COO:</label> {info.coo}</div>
      <div><label>CTO:</label> {info.cto}</div>
      <div><label>CTO Propulsion:</label> {info.cto_propulsion}</div>
      <div><label>Employees:</label> {info.employees}</div>
      <div><label>Founded:</label> {info.founded}</div>
      <div><label>Founder:</label> {info.founder}</div>
      <div><label>Headquarters:</label> </div>
      <div><label>Launch Sites:</label> {info.launch_sites}</div>
      <div><label>Summary:</label> {info.summary}</div>
      <div><label>Valuation:</label> {info.valuation}</div>
      <div><label>Vehicles:</label> {info.vehicles}</div>
    </div>
  }

  return (
    <div bp='grid'>
			<section bp="12" className="page-heading">
				<h1>Company Info</h1>
			</section>

      <div bp="4">&nbsp;</div>

      <div bp="8">
        <section>
          {data}
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      info: state.info.data,
      hasErrored: state.info.infoHasErrored,
      isLoading: state.info.infoIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchInfoData: (url) => dispatch(infoFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXCompanyInfo);
