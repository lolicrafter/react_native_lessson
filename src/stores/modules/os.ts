// counter.ts
import {proxy} from 'valtio';

export const osStore = proxy({
  // state
  os: 'android',
  // action
  setOs: (os: string) => {
    osStore.os = os;
  },
});
