export type PacketBrokerFilter = {
  name?: string;
  description?: string;
  mode: string;
  criteria?: {
    logical_operation: string;
    ipv4_dst?: {
      addr: string[];
    }[],
    layer4_dst_port?: {
      port: string;
    }[];
    vlan?: {
      vlan_id: string;
    }[];
  }
};

export type Filter = {
  name: string;
  description: string;
  ips: string;
  ports: string;
  vlan: string;
};

export const usePacketBroker = () => {

  const { get, post, put } = useHttp();

  const filter = useState<Filter|null>('filter', () => null);

  const reloadFilter = async (): Promise<void> => {
    try {
      const data= await get<PacketBrokerFilter>('/api/filter');
      filter.value = {
        name: data?.name || '',
        description: data?.description || '',
        ips: data?.criteria?.ipv4_dst?.[0]?.addr?.join(',') || '',
        ports: data?.criteria?.layer4_dst_port?.[0]?.port || '',
        vlan: data?.criteria?.vlan?.[0]?.vlan_id || '',
      };
    } catch (error) {
      filter.value = {
        name: '',
        description: '',
        ips: '',
        ports: '',
        vlan: '',
      };
    }
  }

  const updateFilter = async (data: any) => {
    try {
      const payload: PacketBrokerFilter = {
        mode: 'PASS_BY_CRITERIA',
      };
      if (data.ips || data.ports || data.vlan) {
        payload.criteria = {
          logical_operation: 'AND',
        };
        if (data.ips) {
          const ips: string[] = data.ips.split(',').map((ip: string) => ip.trim());
          payload.criteria.ipv4_dst = [{
            addr: ips,
          }];
        }
        if (data.ports) {
          payload.criteria.layer4_dst_port = [{
            port: data.ports,
          }];
        }
        if (data.vlan) {
          payload.criteria.vlan = [{
            vlan_id: data.vlan
          }];
        }
      }
      await put('/api/filter', payload);
      await reloadFilter();
    } catch (err) {
      console.error(err);
    }
  };

  const measure = async () => {
    try {
      const response: any = await post('/api/measure');
      const stats = response?.stats_snapshot?.[0];
      return {
        status: response !== null ? 'Operational' : 'Down',
        passRate: stats?.df_current_pass_rate_bits,
        time: stats?.stats_time,
      }
    } catch (err) {
      console.error(err);
      return {
        status: 'Down',
        passRate: null,
        time: null,
      }
    }
  };

  return {
    filter,
    reloadFilter,
    updateFilter,
    measure,
  };
};