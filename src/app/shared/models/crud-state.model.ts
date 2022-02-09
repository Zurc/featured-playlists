export interface CrudState<T> {
  isLoadingList?: boolean;
  hasLoadingListError?: boolean;

  list?: T[];
}
