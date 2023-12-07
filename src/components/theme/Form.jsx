import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/success');
  };

  return (
    <>
      <form className="form">
        <p className="form__title">Email address</p>
        <input
          type="text"
          placeholder="email@company.com"
          className="form__input"
        />
        <button id="randomKey" className="form__button" onClick={handleSignUp}>
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
}
