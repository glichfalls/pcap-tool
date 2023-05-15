

export const usePacketBroker = () => {

  const { get, post } = useHttp();

  const getPorts = async () => await get('/api/ports');

  const getFilter = async () => await get('/api/filters');

  return {
    getPorts,
    getFilter,
  };
};