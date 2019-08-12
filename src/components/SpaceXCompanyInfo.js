import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import {SpaceXApiUrls} from '../actions'
import { infoFetchData } from '../actions/info';

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
    <div>
      <div>
        <label>CEO:</label>
        <span>{info.ceo}</span>
      </div>
      <div>
        <label>COO:</label>
        <span>{info.coo}</span>
      </div>
      <div>
        <label>CTO:</label>
        <span>{info.cto}</span>
      </div>
      <div>
        <label>CTO Propulsion:</label>
        <span>{info.cto_propulsion}</span>
      </div>
      <div>
        <label>Employees:</label>
        <span>{info.employees}</span>
      </div>
      <div>
        <label>Founded:</label>
        <span>{info.founded}</span>
      </div>
      <div>
        <label>Founder:</label>
        <span>{info.founder}</span>
      </div>
      <div>
        <label>Headquarters:</label>
        <span>
          {info.headquarters.address},  
          {info.headquarters.city}, 
          {info.headquarters.state}
        </span>
      </div>
      <div>
        <label>Launch Sites:</label>
        <span>{info.launch_sites}</span>
      </div>
      <div>
        <label>Summary:</label>
        <span>{info.summary}</span>
      </div>
      <div>
        <label>Valuation:</label>
        <span>{info.valuation}</span>
      </div>
      <div>
        <label>Vehicles:</label>
        <span>{info.vehicles}</span>
      </div>
    </div>
  }

  return (
    <div bp='grid'>
			<div bp="12" className="page-heading">
				<h1>Company Info</h1>
			</div>

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
