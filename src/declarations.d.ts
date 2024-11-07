// Declare that we can import .css files as modules.
declare module '*.css';

// Declare that we can import .jpg files as modules and the imported value will be a string (file path).
declare module '*.jpg' {
  const value: string;
  export default value;
}

// Declare that we can import .svg files as modules and the imported value will be a string (file path).
declare module '*.svg' {
  const value: string;
  export default value;
}

// Declare that we can import .png files as modules and the imported value will be a string (file path).
declare module '*.png' {
  const value: string;
  export default value;
}

// Declare that we can import .png files as modules and the imported value will be a string (file path).
declare module '*.webp' {
  const value: string;
  export default value;
}
