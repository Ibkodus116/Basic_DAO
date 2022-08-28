import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './loader.css'
import * as backend from "./contract.mjs";

function ProposeIdeaScreen(props) {

  const [contractId, setContractId] = useState(0);
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProposeButton = async() => {
    if(contractId == 0){
      alert("contract id cannot be zero");
      return
    }
    setLoading(true);
    const {account, stdlib} = await props.connectToWallet();
    const ctc = account.contract(backend, contractId);
    await ctc.p.Proposer2({
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
    <div className="my-body">
        <input className='action-input' value={contractId} placeholder='Contract id' onChange={(event) => setContractId(event.target.value)}/>
        {loading ?<div className='loader'></div>: null}
        <input className='action-input' placeholder='Idea'  value={idea} onChange={(event) => setIdea(event.target.value)} />
        <button className='action-button' onClick={handleProposeButton}> Propose </button>

    </div>
  );
}

export default ProposeIdeaScreen;
