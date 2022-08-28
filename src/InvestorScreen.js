import logo from './logo.svg';
import './App.css';
import './loader.css'
import * as backend from "./contract.mjs";
import { useState } from 'react';


function InvestorScreen(props) {
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState("");
  const [contractId, setContractId] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [resolveVote, setResolveVote] = useState(undefined)

  const handleGetIdeas = async() => {
    if(contractId == 0){
      alert("contract id cannot be zero");
      return
    }
    setLoading(true);
    const {account, stdlib} = await props.connectToWallet();
    const ctc = account.contract(backend, contractId);
    await ctc.p.user2({
      accepFunds: async (amt) => {
        console.log(`user2 pays ${(amt)} to the network`);
    },
    viewIdeas: (idea1, idea2) => {
      console.log(idea2)
      setIdeas(`1. ${idea1} \n 2. ${idea2}`);
      console.log(`${ideas} \n 2. ${idea2}`);
    },
    voteIdea: async() =>  new Promise((resolve, reject) => {
      console.log("resolve", resolve);
      setResolveVote(() => resolve)
    }),
    seeOutcome: (vote1, vote2, vote3) => {
        alert(`votes were ${vote1}, ${vote2}, ${vote3}`)
    }
  })
  setLoading(false);
  }


  const handleFundContract = async() => {
    resolveVote(idea);
  }
  return (
    <div className="my-body">
      {loading ?<div className='loader'></div>: null}
        <input className='action-input' placeholder='Contract id'  value={contractId}  onChange={(event) => setContractId(event.target.value)}/>
        <button className='action-button' onClick={handleGetIdeas}> Get list of ideas </button>
        <p>{ideas}</p>
        <input className='action-input' placeholder='Idea'   value={idea} onChange={(event)=> setIdea(event.target.value)} />
        <button className='action-button' onClick={handleFundContract} > Fund contract </button>

    </div>
  );
}

export default InvestorScreen;
