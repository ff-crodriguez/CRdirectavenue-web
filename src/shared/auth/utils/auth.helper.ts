import {
  type I2FAResponse,
  type IDoubleLoginResponse,
  type ILoginResponse,
  type IUserValidated,
} from '@shared/auth';

export const is2FAResponse = (
  response:
    | IUserValidated
    | I2FAResponse
    | ILoginResponse
    | IDoubleLoginResponse,
): response is I2FAResponse => {
  return (response as I2FAResponse).challenge_id !== undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const printDebug = (debug?: string, ...value: any[]) => {
  if (debug) {
    console.log(debug, ...value);
  }
};
