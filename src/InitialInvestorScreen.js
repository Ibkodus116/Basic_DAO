import logo from './logo.svg';
import './App.css';
import './loader.css'
import * as backend from "./contract.mjs";
import { useState } from 'react';


function InitialInvestorScreen(props) {
  const [idea, setIdea] = useState("");
    const [contractId, setContractId] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [funds, setFunds] = useState(0);
    const [ideas, setIdeas] = useState("");
    const [resolveVote, setResolveVote] = useState(undefined)
    const [resolveFunds, setResolveFunds] = useState(undefined);
  const handleGetIdeas = async() => {
    if(contractId == 0){
      alert("contract id cannot be zero");
      return
    }
    setLoading(true);
    const {account, stdlib} = await props.connectToWallet();
    const ctc = account.contract(backend, contractId);
    await ctc.p.user1({
      funds: stdlib.parseCurrency(parseInt(funds)),
      deadline: 100000,
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
    console.log("resolveVote", resolveVote)
    resolveVote(idea)
    // resolveFunds(parseInt(funds));
  }
  return (
    <div className="my-body">
      {loading ?<div className='loader'></div>: null}
        <input className='action-input' placeholder='Contract id' value={contractId} onChange={(event) => setContractId(event.target.value)}/>
        <input className='action-input' placeholder='Amount of funds' value={funds} onChange={(event)=> setFunds(event.target.value)}/>
        <button className='action-button' onClick={handleGetIdeas}> Connect to contract </button>
        <p className='list-of-ideas'>{ideas}</p>
        <input className='action-input' placeholder='Idea'  value={idea} onChange={(event)=> setIdea(event.target.value)} />
        <button className='action-button' onClick={handleFundContract}> Fund contract </button>

    </div>
  );
}

export default InitialInvestorScreen;
