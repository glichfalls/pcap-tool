import { FormKitNode } from '@formkit/core';

const ports = (node: FormKitNode): boolean => {
  if (node.value === '') {
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

const validate = (value: any) => value && Number(value) > 0 && Number(value) <= 65535;

export default ports;