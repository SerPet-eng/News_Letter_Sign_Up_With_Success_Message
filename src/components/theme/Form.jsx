import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (value) {
      navigate('/success');
      setError(null);
    } else {
      setError('Valid email required');
    }
  };

  return (
    <>
      <form className="form">
        <div className="form__placeholder">
          <p className="form__title">Email address</p>
          {error && <small className="error">{error}</small>}
        </div>
        <input
          type="email"
          value={value}
          placeholder="email@company.com"
          onChange={(e) => setValue(e.target.value)}
          className={`form__input ${error ? 'form__error' : ''}`}
        />
        <button id="randomKey" className="form__button" onClick={handleSignUp}>
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
}
