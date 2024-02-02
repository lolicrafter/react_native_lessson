import {proxy} from 'valtio';
import {resetStore} from '@/utils';

const initialState = {
  type: '游戏',
  name: '',
  account: '',
  password: '',
};

export const UseAddAccountStore = proxy({
  ...initialState,
  setType: (type: string) => {
    UseAddAccountStore.type = type;
  },
  setName: (name: string) => {
    UseAddAccountStore.name = name;
  },
  setAccount: (account: string) => {
    UseAddAccountStore.account = account;
  },
  setPassword: (password: string) => {
    UseAddAccountStore.password = password;
  },
  submit: () => {
    const {type, name, account, password} = UseAddAccountStore;
    console.log('submit', type, name, account, password);
    resetStore(UseAddAccountStore, initialState);
  },
});
