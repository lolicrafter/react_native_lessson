// counter.ts
import {proxy} from 'valtio';

/**
 * @description os store
 * @export osStore
 */
export const osStore = proxy({
  // state
  os: 'android',
  // action
  setOs: (os: string) => {
    this.os = os;
    console.log(
      '%c--🚀🚀🚀🚀🚀------os.ts---注释所在行数14----😊==执行=》',
      'color: red;font-size:x-large',
      os,
    );
  },
});
