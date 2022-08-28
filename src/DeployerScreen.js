import logo from './logo.svg';
import './App.css';
import './loader.css'
import * as backend from "./contract.mjs";
import { useState } from 'react';

function DeployScreen(props) {
    console.log(props)

    const [idea, setIdea] = useState("");
    const [contractId, setContractId] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const handleDeployClicked = async() => {
        setLoading(true);
        const {account, stdlib} = await props.connectToWallet();
        const ctc = account.contract(backend);
        ctc.getInfo().then((info) => {
            setContractId(info.toNumber());
        });
        await ctc.p.Proposer1({
            proposeIdea: ()=>{
            return idea;
        },
        seeOutcome: (vote1, vote2, vote3) => {
            alert(`votes were ${vote1}, ${vote2}, ${vote3}`)
        }
        });
        setLoading(false);
    }
  return (
    <div>
    <div className="my-body">
       {contractId? <p className='info-text'>Contract Id: {contractId}</p>: null}
       {loading ?<div className='loader'></div>: null}
        <input className='action-input'  placeholder='Idea' value={idea} onChange={(event)=> setIdea(event.target.value)} />
        <button className='action-button' onClick={handleDeployClicked}> Deploy </button>
    </div>
    </div>
  );
}

export default DeployScreen;
