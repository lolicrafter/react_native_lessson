import {proxy} from 'valtio';
// import {resetStore} from '@/utils';
import {nanoid} from 'nanoid';
import {storage} from '@/utils/asyncStorage';
import _ from 'lodash';

interface state {
  type: string;
  name: string;
  account: string;
  password: string;
}

interface IAddAccountStore extends state {
  accounts: state[];
  StringifyAccounts: string;
  initialAccounts: () => void;
  setType: (type: string) => void;
  setName: (name: string) => void;
  setAccount: (account: string) => void;
  setPassword: (password: string) => void;
  submit: () => void;
  reset: () => void;
}

const initialState: state = {
  type: '游戏',
  name: '',
  account: '',
  password: '',
};
export const UseAddAccountStore = proxy<IAddAccountStore>({
  ...initialState,
  accounts: [],
  get StringifyAccounts() {
    return JSON.stringify(this.accounts);
  },
  initialAccounts: async () => {
    UseAddAccountStore.accounts = (await storage.getItem('accounts')) || [];
  },
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
  reset: () => {
    const deepCopyInitialState = _.cloneDeep(initialState);
    for (let key in deepCopyInitialState) {
      if (UseAddAccountStore.hasOwnProperty(key)) {
        UseAddAccountStore[key] = deepCopyInitialState[key];
      }
    }
  },
  submit: async () => {
    const accounts = (await storage.getItem('accounts')) || [];
    const {id = nanoid(), type, name, account, password} = UseAddAccountStore;
    const newAccount = {id, type, name, account, password};
    await storage.setItem('accounts', [...accounts, newAccount]);
    UseAddAccountStore.reset();
  },
});
