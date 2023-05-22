import { useHttp } from '~/composables/useHttp';


export const useNbox = () => {

  const { get, post } = useHttp();

  const listRecordings = async () => {
    try {
      return await get('/api/recording/list');
    } catch (error) {
      return '';
    }
  }

  const startRecording = async (data: any) => {
    try {
      const response = await post('/api/recording/start', {
        duration: data?.duration || null,
        size: data?.size || null,
      });
      return true;
    } catch (error) {
      console.error(error);
    }
  };

  const generateTraffic = async () => {
    return await post('/api/traffic/generate');
  };

  const stopRecording = () => {

  };

  return {
    listRecordings,
    startRecording,
    stopRecording,
    generateTraffic,
  }
}

