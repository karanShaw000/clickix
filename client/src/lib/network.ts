const getBaseUrl = (): string => {
  if (import.meta.env.DEV) {
    return 'http://localhost:5000/api';
  }

  const url = `${import.meta.env.VITE_BACKEND_URL}/api`;
  return url;
}

export default getBaseUrl

