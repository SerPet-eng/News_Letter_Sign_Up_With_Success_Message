import MobileImage from '../../../assets/images/illustration-sign-up-mobile.svg';
import DesktopImage from '../../../assets/images/illustration-sign-up-desktop.svg';

export default function Image() {
  return (
    <>
      <picture className="app__image">
        <source media="(min-width: 800px)" srcSet={DesktopImage} />
        <img src={MobileImage} alt="An Illustration Image for Sign Up" />
      </picture>
    </>
  );
}
