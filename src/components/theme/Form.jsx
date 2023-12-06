export default function Form() {
  return (
    <>
      <form className="form">
        <h3 className="form__title">Email address</h3>
        <input
          type="text"
          placeholder="email@company.com"
          className="form__input"
        />
        <button className="form__button">
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
}
