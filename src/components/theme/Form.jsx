export default function Form() {
  return (
    <>
      <form className="form">
        <p className="form__title">Email address</p>
        <input
          type="text"
          placeholder="email@company.com"
          className="form__input"
        />
        <button id="randomKey" className="form__button">
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
}
