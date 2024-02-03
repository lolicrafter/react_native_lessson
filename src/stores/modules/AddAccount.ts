import {proxy} from 'valtio';
// import {resetStore} from '@/utils';
import {nanoid} from 'nanoid';
import {storage} from '@/utils/asyncStorage';
import _ from 'lodash';

export interface IAccountItem {
  activeType?: string;
  type: string;
  name: string;
  account: string;
  password: string;
  id?: string;
}

interface IAddAccountStore extends IAccountItem {
  accounts: IAccountItem[];
  initialAccounts: () => void;
  setAccountItem: (item: IAccountItem) => void;
  setType: (type: string) => void;
  setActiveType: (type: string) => void;
  setName: (name: string) => void;
  setAccount: (account: string) => void;
  setPassword: (password: string) => void;
  removeAccount: (id: string) => void;
  submit: () => void;
  reset: () => void;
}

const initialState: IAccountItem = {
  type: '游戏',
  name: '',
  id: '',
  account: '',
  password: '',
  activeType: '游戏',
};
export const UseAddAccountStore = proxy<IAddAccountStore>({
  ...initialState,
  accounts: [],
  initialAccounts: async () => {
    // storage.clear();
    UseAddAccountStore.accounts = (await storage.getItem('accounts')) || [];
  },
  setAccountItem: (item: IAccountItem) => {
    UseAddAccountStore.id = item.id;
    UseAddAccountStore.type = item.type;
    UseAddAccountStore.name = item.name;
    UseAddAccountStore.account = item.account;
    UseAddAccountStore.password = item.password;
  },
  removeAccount: async (id: string) => {
    const accounts = (await storage.getItem('accounts')) || [];
    const index = accounts.findIndex(item => item.id === id);
    if (index > -1) {
      UseAddAccountStore.accounts = accounts.filter((item, i) => i !== index);
    }
    await storage.setItem('accounts', UseAddAccountStore.accounts);
  },
  setType: (type: string) => {
    UseAddAccountStore.type = type;
  },
  setActiveType: (type: string) => {
    if (UseAddAccountStore.activeType === type) {
      UseAddAccountStore.activeType = '';
    } else {
      UseAddAccountStore.activeType = type;
    }
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
    const {id, type, name, account, password} = UseAddAccountStore;
    console.log(
      '%c--🚀🚀🚀🚀🚀------AddAccount.ts---注释所在行数81----{id, type, name, account, password}😊===》',
      'color: red;font-size:x-large',
      {
        id,
        type,
        name,
        account,
        password,
      },
    );
    if (id) {
      const index = accounts.findIndex(item => item.id === id);
      accounts[index] = {id, type, name, account, password};
      UseAddAccountStore.accounts = accounts;
    } else {
      UseAddAccountStore.accounts = [
        ...accounts,
        {id: nanoid(), type, name, account, password},
      ];
    }
    console.log(
      '%c--🚀🚀🚀🚀🚀------AddAccount.ts---注释所在行数91----UseAddAccountStore.accounts😊===》',
      'color: red;font-size:x-large',
      UseAddAccountStore.accounts,
    );
    await storage.setItem('accounts', UseAddAccountStore.accounts);
    initialState.activeType = UseAddAccountStore.type;
    UseAddAccountStore.reset();
  },
});
