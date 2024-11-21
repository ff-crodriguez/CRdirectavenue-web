import Button from '../../components/button/Button';
import ButtonProps, { IButtonProps } from '../../types/button/ButtonProps';

/**
 * Home Page example
 * @returns Returns Jsx Element
 */
const Home = (): JSX.Element => {
  const buttonProps: IButtonProps = new ButtonProps('Increase');
  return (
    <>
      <h1>Home</h1>
      <Button {...buttonProps} />
    </>
  );
};

export default Home;
