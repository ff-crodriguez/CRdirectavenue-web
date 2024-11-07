import Navigation from '../../components/navigation/Navigation';

/**
 * Erro page example
 * @returns Returns Jsx Element
 */
const ErrorPage = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <main>
        <h1>An Error Ocurred !</h1>
        <h2>An error ocurred we did not find what you are looking for ! </h2>
      </main>
    </>
  );
};

export default ErrorPage;
