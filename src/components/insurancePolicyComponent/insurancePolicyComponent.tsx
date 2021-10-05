import InsuranceItems from '../insuranceItem/insuranceItem';
import './insurancePolicyComponent.css';
import '../../index.css'
import testLogo from '../../testLogo.svg';
import { useState } from 'react';

export enum Status {
  active = 'Active',
  unpaid = 'Unpaid',
  ending = 'Ending',
  ended = 'Ended'
}

export interface insuranceItem {
  id: number,
  name: string,
  description: string,
  from: Date,
  to: Date,
  status: {
    flag: Status,
    amount?: number
  },
  logo: string;
}


function InsurancePolicyComponent() {
  var items: insuranceItem[] = [
    { id: 1, name: 'Test', description: 'Dancin bout',  from: new Date(), to: new Date(), status: {flag: Status.active}, logo: testLogo},
    { id: 2, name: 'Test', description: 'Dancin bout', from: new Date(), to: new Date(), status: {flag: Status.unpaid, amount: 25}, logo: testLogo},
    { id: 3, name: 'Test', description: 'Dancin bout', from: new Date(), to: new Date(), status: {flag: Status.ending}, logo: testLogo},
    { id: 4, name: 'Test', description: 'Dancin bout', from: new Date(), to: new Date(), status: {flag: Status.ended}, logo: testLogo}
  ];

  //hide toggle
  // const [hidden, setHidden] = useState();
  // const toggleHide 

  return (
    <div className="policy-wrapper">
      <h1>Insurance policies</h1>
      <div className="policy-content">
        <ul className="inline">
          {items.map((item, i) => <InsuranceItems {...item} key={i}></InsuranceItems>)}
        </ul>
      </div>
    </div>
  );
}



export default InsurancePolicyComponent;
