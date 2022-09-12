import { IDomainResult } from "src/app/types/domainResult.interface"

export interface IWatchListState {
  myWatchList: IDomainResult[]
}

export const initialQueryState: IWatchListState = {
  myWatchList: []
}
