import { CrudState } from './crud-state.model';

export type CrudStateObject<T> = { [key: string]: CrudState<T> };
