import { useState } from 'react';

/**
 * Hook for toast-style alerts. Returns { alert: { show, text, type }, showAlert({ text, type }), hideAlert() }.
 * Use with <Alert {...alert} /> when alert.show; type is 'danger' | 'success'.
 */
const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
