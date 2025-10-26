/// <reference types="vite/client" />

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.pdf' {
  const src: string;
  export default src;
}

// Allow importing any other static asset types as strings
declare module '*?url' {
  const value: string;
  export default value;
}
