

export type Filter = {
  name: string;
  description: string;
  type: string;
  direction: 'destination'|'source'|'*';
  ipversion: string;
  ipprotocol: string;
  address: string[];
  port: string[];
  vlan: string[];
}

const STORAGE_KEY = 'filter_config';

export const useFilter = () => {

  const data = ref<Filter[]>([]);

  const load = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      data.value = JSON.parse(saved);
    } else {
      data.value = [];
    }
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.value));
  };

  const add = (filter: Filter) => {
    data.value = [...data.value, filter];
  };

  const remove = (name: string) => {
    data.value = data.value.filter((f) => f.name !== name);
  }

  const transform = () => {

  };

  return {
    load,
    save,
    add,
    remove,
    filters: data,
  }

}