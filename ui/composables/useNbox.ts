import { ApiResponse, useHttp } from '~/composables/useHttp';


export const useNbox = () => {

  const { get, post } = useHttp();

  const listRecordings = async () => {
    try {
      return await get('/api/recording/list');
    } catch (error) {
      return '';
    }
  }

  const startRecording = async (data: any): Promise<string | null> => {
    try {
      const response = await post<ApiResponse>('/api/recording/start', {
        duration: Number(data?.duration || 0),
        size: Number(data?.size || 0),
      });
      return response.message;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const generateTraffic = async () => {
    return await post('/api/traffic/generate');
  };

  const stopRecording = async (pid: string) => {
    try {
      const response = await post<ApiResponse>(`/api/recording/${pid}/stop`);
      return response.message;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    listRecordings,
    startRecording,
    stopRecording,
    generateTraffic,
  }
}

