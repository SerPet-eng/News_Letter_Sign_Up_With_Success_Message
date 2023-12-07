import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to ash@loremcompany.com. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button onClick={handleButton}>Dismiss message</button>
      </div>
    </>
  );
}
