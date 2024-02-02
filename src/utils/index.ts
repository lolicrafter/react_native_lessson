import _ from 'lodash';

export const resetStore = (store: object, initialState: object) => {
  const deepCopyInitialState = _.cloneDeep(initialState);
  for (let key in deepCopyInitialState) {
    if (deepCopyInitialState.hasOwnProperty(key)) {
      store[key] = deepCopyInitialState[key];
    }
  }
};
