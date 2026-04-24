import { useState, useCallback, useRef, useEffect } from 'react';

interface UseClipboardOptions {
  timeout?: number;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface UseClipboardReturn {
  value: string;
  isCopied: boolean;
  copy: (text: string) => Promise<void>;
  reset: () => void;
  error: Error | null;
}

export const useClipboard = (options: UseClipboardOptions = {}): UseClipboardReturn => {
  const { timeout = 2000, onSuccess, onError } = options;

  const [value, setValue] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        // Modern Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          
          const successful = document.execCommand('copy');
          textArea.remove();
          
          if (!successful) {
            throw new Error('Failed to copy text');
          }
        }

        setValue(text);
        setIsCopied(true);
        setError(null);

        if (onSuccess) {
          onSuccess();
        }

        // Auto-reset after timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
          setIsCopied(false);
        }, timeout);
      } catch (err) {
        const copyError = err instanceof Error ? err : new Error('Failed to copy');
        setError(copyError);
        setIsCopied(false);

        if (onError) {
          onError(copyError);
        }
      }
    },
    [timeout, onSuccess, onError]
  );

  const reset = useCallback(() => {
    setValue('');
    setIsCopied(false);
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    value,
    isCopied,
    copy,
    reset,
    error,
  };
};