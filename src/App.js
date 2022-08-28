import logo from './logo.svg';
import './App.css';
import DeployScreen from './DeployerScreen';
import InvestorScreen from './InvestorScreen';
import ProposeIdeaScreen from './ProposeIdeaScreen';
import InitialInvestorScreen from './InitialInvestorScreen';
import InvestorScreen3 from './InvestorScreen3';
import { useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
function App() {

  const connectToWallet = async() => {
    const stdlib = loadStdlib("ALGO");
    stdlib.setWalletFallback(
      stdlib.walletFallback({
        providerEnv: 'TestNet', MyAlgoConnect 
      })
    );
    const account = await stdlib.getDefaultAccount();
    return{account, stdlib};
  }

  const LoadScreen = ( <div className="my-body">
  <button className='action-button' onClick={() => gotoScreen(pages.deployerScreen)}>Deployer</button>
  <button className='action-button' onClick={() => gotoScreen(pages.ProposeIdeaScreen)}> Proposer </button>
  <button className='action-button' onClick={() => gotoScreen(pages.initialInvestorScreen)}>Initial Investor</button>
  <button className='action-button' onClick={() => gotoScreen(pages.investorScreen)}>Investor 2</button>
  <button className='action-button' onClick={() => gotoScreen(pages.investorScreen3)}>Investor 3</button>
</div>);
  const pages ={
    deployerScreen: (<div>
      <DeployScreen connectToWallet = {connectToWallet} ></DeployScreen>
    </div>),
    investorScreen: (<div>
      <InvestorScreen  connectToWallet = {connectToWallet}  ></InvestorScreen>
    </div>),
    ProposeIdeaScreen: (<div>
      <ProposeIdeaScreen connectToWallet = {connectToWallet}></ProposeIdeaScreen>
    </div>),
    initialInvestorScreen: (<div>
      <InitialInvestorScreen connectToWallet = {connectToWallet}></InitialInvestorScreen>
    </div>),
    investorScreen3: (<div>
      <InvestorScreen3 connectToWallet = {connectToWallet}></InvestorScreen3>
    </div>),
    loadScreen: LoadScreen
  }
const [screen, setScreen] = useState(pages.loadScreen)
const gotoScreen = (newScreen) => {
  setScreen(newScreen)

}
  return (
    screen
  );
}

export default App;
