type StateCreator<T> = (set: (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean) => void, get: () => T) => T;

class Store<T> {
  private state: T;
  private listeners: Set<() => void> = new Set();
  constructor(initialState: T) {
    this.state = initialState;
  }
  getState = (): T => {
    return this.state;
  };
  setState = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace = false): void => {
    const nextState = typeof partial === 'function' ? (partial as (state: T) => T | Partial<T>)(this.state) : partial;
    this.state = replace ? (nextState as T) : { ...this.state, ...nextState };
    this.listeners.forEach(listener => listener());
  };

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };
}

const createStore = <T>(stateCreator: StateCreator<T>): Store<T> => {
  const store = new Store<T>({} as T); // 初始化 store
  const initialState = stateCreator(store.setState, store.getState);
  store.setState(initialState, true); // 设置初始状态
  return store;
};




/* -------------------使用示例------------------- */
/*
interface BearState {
  bears: number;
  increase: () => void;
}

const useBearStore = createStore<BearState>((set, get) => ({
  bears: 0,
  increase: () => set(state => ({ bears: state.bears + 1 })),
}));

// 在组件中使用
const Component = () => {
  const [bears, setBears] = React.useState(useBearStore.getState().bears);

  React.useEffect(() => {
    const unsubscribe = useBearStore.subscribe(() => setBears(useBearStore.getState().bears));
    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>{bears} bears</h1>
      <button onClick={useBearStore.getState().increase}>Increase</button>
    </div>
  );
};
*/
/* -------------------使用示例------------------- */
