import React from 'react';
import { TaxStore } from '../Stores/TaxStore';

function TaxInfo(){
    const taxYear = TaxStore((state)=>state.taxYear);
    const taxRate = TaxStore((state)=>state.taxRate);
    const singleBracket = TaxStore((state)=>state.singleBracket);
    const marriedBracket = TaxStore((state)=>state.marriedBracket);
    const headBracket = TaxStore((state)=>state.headBracket);
    const singleDeducetion = TaxStore((state)=>state.singleDeducetion);
    const marriedDeduction = TaxStore((state)=>state.marriedDeduction);
    const headDeduction = TaxStore((state)=>state.headDeduction);

    return (
        <>
        <div>
            <h2>{taxYear} Federal Income Tax Brackets and Rates</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Tax Rate</th>
                        <th scope="col">Single Filers</th>
                        <th scope="col">Married Filing Jointly</th>
                        <th scope="col">Head of Household</th>
                    </tr>
                </thead>
                <tbody>
                    {taxRate.map((rate,index)=>(
                        <tr key={index}>
                            <th scope="row">{rate}</th>
                            <td>
                                {index===0?(
                                    `$0-${singleBracket[index].toLocaleString()}`
                                ):index<taxRate.length-1?(
                                    `$${(singleBracket[index-1]+1).toLocaleString()} - ${singleBracket[index].toLocaleString()} `
                                ):(
                                    `Over $${singleBracket[index-1].toLocaleString()}`
                                )
                            }
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
        <div>
            <h2>{taxYear} Standard Deduction</h2>
            <p><strong>Single Filing: </strong>${singleDeducetion}</p>
            <p><strong>Married Filing: </strong>${marriedDeduction}</p>
            <p><strong>Head of Household: </strong>${headDeduction}</p>
        </div>
        </>
    );

};

export default TaxInfo;