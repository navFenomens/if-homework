import './insuranceItem.css';
import '../../index.css';
import { Status } from '../insurancePolicyComponent/insurancePolicyComponent';
import { insuranceItem } from '../insurancePolicyComponent/insurancePolicyComponent';

//insurance item
function InsuranceItems(item: insuranceItem, key: number) {

    console.log(item);

    return (
        <li key={key} className='item-wrapper flex'>
            <img src={item.logo} className='item-logo'></img>
            <div className='item-text inline'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
            <div className='item-dates flex'>
                {getFormattedDate(item.from) + ' - ' + getFormattedDate(item.to)}
            </div>
            {insuranceStatus(item.status)}

        </li>);
}

//Returns a styled status
function insuranceStatus(status: { flag: Status, amount?: number }) {
    var result;

    switch (status.flag) {
        case Status.active:
            result = <button className='button'>Fill a claim</button>
            break;
        case Status.unpaid:
            result = <button className='button button-blue'>Pay {status.amount + '$'}</button>
            break;
        case Status.ended:
        case Status.ending:
            result = <button className='button'>Renew</button>;
            break;
        default:
            <button>dumb</button>
            break;
    }

    return (
        <div className='item-status-wrapper flex'>
            <div className='item-status'>
                {status.flag}
            </div>
            <div className='item-button'>
                {result}
            </div>
        </div>
    )
}

//
function getFormattedDate(date: Date) {
    return (
        date.toDateString()
    )
}
export default InsuranceItems;