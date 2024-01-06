import logo from './logo.svg';
import './App.css';

function App() {
  const discount = <p className="special">Take 10% off all items!</p>
  const tShirt = <p className="special">Free t-shirt with a purchase of $20 or more!</p>
  const bogo50 = <p className="special">Buy one item, get another 50% off!</p>
  const bobblehead = <p className="special">Exclusive Purdue Pete bobblehead with any purchase!</p>
  const poster = <p className="special">Free Mackey Arena poster with a purchase of $15 or more!</p>

  let num = Math.random() * 5

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2 id="title">Welcome to Sam's Hardware Store!</h2>

        <div>
          <p className="listHeader">Daily Special:</p>
          {num >= 4 ? discount : num >= 3 ? tShirt : num >= 2 ? bogo50 : num >= 1 ? bobblehead : poster}

          <p className="listHeader">Shop Items:</p>

          <ul id="listItems">
            <li>Purdue Pete's Hammer</li>
            <li>Purdue Pete's Hardhat</li>
            <li>ECE 20007/270/362 Lab Kits</li>
            <li>Analog Disovery 2</li>
            <li>Senior Design Resources</li>
          </ul>

        </div>

        <p id="extra">[Please contact the ECE shop for additional information]</p>
        <p id="closing">Sam's Hardware Store, serving Purdue students since 1981</p>
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
