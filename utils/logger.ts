// src/utils/logger.ts

export const logRender = (componentName: string): void => {
    if (typeof window === 'undefined') {
      console.log(`Server Render: ${componentName}`);
    } else {
      console.log(`Client Render: ${componentName}`);
    }
  };
  