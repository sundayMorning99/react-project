import React from 'react';
import { ContributionStore } from '../Stores/ContributionStore';

function RetirementType(){
    const k401 = ContributionStore((state)=>state.k401);
    const IRA = ContributionStore((state)=>state.IRA);
    const sepIRA = ContributionStore((state)=>state.sepIRA);
    const taxYear = TaxStore((state)=>state.taxYear);

    return(
        <div>
            <h2>{taxYear} Retirement Contribution Limits</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">401k or 403b</th>
                        <th scope="col">Traditional or Roth IRA</th>
                        <th scope="col">Sep IRA</th>
                    </tr>
                    <tr>
                        <th scope="row">Limit</th>
                        <th>${k401[0]}</th>
                        <th>${IRA[0]}</th>
                        <th>${sepIRA[0]}</th>
                    </tr>
                    <tr>
                        <th scope="row">Catch-up</th>
                        <th>${k401[1]}</th>
                        <th>${IRA[1]}</th>
                        <th>${sepIRA[1]}</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default RetirementType;