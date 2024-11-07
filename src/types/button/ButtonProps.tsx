/**
 * Button props interface definition.
 */
interface IButtonProps {
  /**
   * Button Name.
   */
  readonly name: string;
  readonly color: string;
}

class ButtonProps implements IButtonProps {
  /**
   * Button Name.
   */
  readonly name: string;
  color: string;
  /**
   * Setting up a new instance properties.
   * @param _name Button Name
   */
  constructor(_name: string, _color: string = '') {
    this.name = _name;
    this.color = _color;
  }
}

export default ButtonProps;

export type { IButtonProps };
