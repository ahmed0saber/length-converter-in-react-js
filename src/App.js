import './App.css';
import { useState, Fragment } from 'react';
import units from './data/units';
import InputWrapper from './components/InputWrapper';

function App() {
  const [lengthUnits, setLengthUnits] = useState(units)
  const [standardUnit, setStandardUnit] = useState(0)

  const updateStandardUnit = (value) => {
    setStandardUnit(value)
  }

  const resetStandardUnit = () => {
    setStandardUnit(0)
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Length Converter</h1>
      {
        lengthUnits.map(lengthUnit => <Fragment key={lengthUnit.id}>
          <InputWrapper data={lengthUnit} updateStandardUnit={updateStandardUnit} standardUnit={standardUnit} />
        </Fragment>)
      }
      <button className="reset-btn" onClick={() => resetStandardUnit()}>Reset</button>
    </div>
  );
}

export default App;
