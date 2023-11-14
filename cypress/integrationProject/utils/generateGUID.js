//Generate Random GUID
import { v4 as uuidv4 } from 'uuid';
export function generateGUID() {
  const guid = uuidv4();
  return guid;
}

