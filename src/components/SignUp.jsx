import Image from './theme/Image';
import Content from './theme/Content';
import Form from './theme/Form';

export default function SignUp() {
  return (
    <>
      <article className="app">
        <Image />
        <section className="content">
          <Content />
          <Form />
        </section>
      </article>
    </>
  );
}
