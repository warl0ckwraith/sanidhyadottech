
import { useRef } from "react";

/**
 * Custom hook to prevent rapid double-clicks/race conditions on panels.
 * @param fn The panel opening/closing function.
 * @param delay The debounce delay in ms.
 */
export function useDebouncedPanel<T extends (...args: any) => void>(fn: T, delay = 250) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const isLocked = useRef(false);

  function wrapped(...args: Parameters<T>) {
    if (isLocked.current) return;
    isLocked.current = true;
    fn(...args);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      isLocked.current = false;
    }, delay);
  }

  return wrapped as T;
}
