/**
 * Global settings component.
 */
export const envVariables: { [key: string]: string } = {
  VITE_API_URL: import.meta.env.VITE_API_URL || '${VITE_API_URL}',
};
