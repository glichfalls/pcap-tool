export type PacketBrokerFilter = {
  name: string;
  description: string;
  mode: string;
  criteria: {
    logical_operation: string;
    layer4_dst_port: {
      port: string;
    };
    vlan: {
      vlan_id: string;
    };
  }
};

export const usePacketBroker = () => {

  const { get, post, put } = useHttp();

  const getFilter = async (): Promise<PacketBrokerFilter|null> => {
    try {
      return await get('/api/filter');
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const updateFilter = async (vlan: string, ports: string) => {
    await put('/api/filter', {
      name: 'F2',
      description: 'Test',
      mode: 'PASS_BY_CRITERIA',
      criteria: {
        logical_operation: 'AND',
        layer4_dst_port: {
          port: ports,
        },
        vlan: {
          vlan_id: vlan,
        },
      },
    });
    return await getFilter();
  };

  const measure = async () => {
    const response: any = await post('/api/measure');
    const stats = response?.stats_snapshot?.[0];
    return {
      passRate: stats?.df_current_pass_rate_bits,
      time: stats?.stats_time,
    }
  };

  return {
    getFilter,
    updateFilter,
    measure,
  };
};