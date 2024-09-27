import { useEffect, useState } from 'react'
import { getFlag } from './api'
import './App.css'

const App = () => {
  const [flag, setFlag] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const produceFlag = async () => {
      const result = await getFlag();
      setFlag(result);
      setLoading(false);
    };

    produceFlag()
  }, []);

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <ul>
          {flag}
        </ul>
      )}
    </div>
  );
};

export default App;