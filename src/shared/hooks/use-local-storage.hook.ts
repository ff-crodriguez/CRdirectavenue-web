import { useCallback, useState } from 'react';

export type SetValue<T> = (value: T | ((val: T) => T)) => void;
type ReturnValue<T> = [T, SetValue<T>];

const PREFIX = 'lear-';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): ReturnValue<T> => {
  const prefixedKey = PREFIX + key;
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(prefixedKey);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(prefixedKey, JSON.stringify(valueToStore));
      } catch {
        throw new Error('Error setting value in local storage');
      }
    },
    [prefixedKey, storedValue],
  );

  return [storedValue, setValue];
};
