// Global type augmentation for Lenis instance attached to window
import type Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export {};
