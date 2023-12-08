import { useNavigate } from 'react-router-dom';
import Image from '../../assets/images/icon-success.svg';

export default function Success() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/');
  };

  return (
    <>
      <section className="success">
        <div className="success__content">
          <img src={Image} alt="Success Icon" className="success__image" />
          <div className="success__section">
            <h1 className="success__title">Thanks for subscribing!</h1>
            <p className="success__description">
              A confirmation email has been sent to{' '}
              <span className="email">ash@loremcompany.com</span>. Please open
              it and click the button inside to confirm your subscription.
            </p>
            <button onClick={handleButton} className="success__button">
              Dismiss message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
