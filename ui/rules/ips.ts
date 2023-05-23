import { FormKitNode } from '@formkit/core';
import { isIPv4 } from 'is-ip';
import isCidr from 'is-cidr';

const ips = (node: FormKitNode): boolean => {
  if (node.value === '') {
    return true;
  }
  if (node.value === '*') {
    return true;
  }
  if (validate(node.value)) {
    return true;
  }
  const items = node.value?.toString().split(',').join('-').split('-');
  if (items && items.length > 0) {
    return items.filter((item) => validate(item)).length === items.length;
  }
  return false;
};

const validate = (value: any) => {
  if (!value) {
    return false;
  }
  if (isIPv4(value.trim())) {
    return true;
  }
  return isCidr.v4(value.trim());
}

export default ips;