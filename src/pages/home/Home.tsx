import Button from "../../components/button/Button";
import ButtonProps, { IButtonProps } from "../../types/ButtonProps";

/**
 * Home Page example
 * @returns Returns Jsx Element
 */
const Home = (): JSX.Element => {
    const buttonProps: IButtonProps = new ButtonProps("1");
    return (
        <>
            <h1>Home</h1>
            <Button {...buttonProps}></Button>
        </>
    )
}

export default Home;