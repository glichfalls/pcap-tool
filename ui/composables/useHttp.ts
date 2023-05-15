import { useRuntimeConfig } from '#app';

export const useHttp = () => {
  const { public: { apiUrl } } = useRuntimeConfig();

  const headers = {
    'Content-Type': 'application/json',
  };

  const get = async <T>(url: string, params = {}): Promise<T> => {
    const queryString = new URLSearchParams(params).toString();
    return await $fetch(`${url}?${queryString}`, {
      baseURL: apiUrl,
      headers,
    });
  };

  const post = (url: string, params = {}) => {
    return $fetch(url, {
      method: 'POST',
      baseURL: apiUrl,
      body: params,
      headers,
    });
  };

  const put = (url: string, params = {}) => {
    return $fetch(url, {
      method: 'PUT',
      baseURL: apiUrl,
      body: params,
      headers,
    });
  };

  const httpDelete = (url: string) => {
    return $fetch(url, {
      method: 'DELETE',
      baseURL: apiUrl,
      headers,
    });
  };

  return {
    get,
    post,
    put,
    httpDelete,
  };
};
