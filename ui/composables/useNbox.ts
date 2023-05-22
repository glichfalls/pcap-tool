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
      await post('/api/recording/start', {
        duration: Number(data?.duration || 0),
        size: Number(data?.size || 0),
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

