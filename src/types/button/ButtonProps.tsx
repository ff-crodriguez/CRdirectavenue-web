/**
 * Button props interface definition.
 */
interface IButtonProps {
  /**
   * Button Name.
   */
  readonly name: string;
}

class ButtonProps implements IButtonProps {
  /**
   * Button Name.
   */
  readonly name: string;
  /**
   * Setting up a new instance properties.
   * @param _name Button Name
   */
  constructor(_name: string) {
    this.name = _name;
  }
}

export default ButtonProps;

export type { IButtonProps };
