import { useHttp } from '~/composables/useHttp';


export const useNbox = () => {

  const { get, post } = useHttp();

  const startRecording = async () => {
    return await post('/api/recording/start');
  };

  const generateTraffic = async () => {
    return await post('/api/traffic/generate');
  };

  const stopRecording = () => {

  };

  return {
    startRecording,
    stopRecording,
    generateTraffic,
  }
}

