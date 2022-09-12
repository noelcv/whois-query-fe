import { IParsedDomain } from "src/app/types/parsedDomain.interface"

export interface IWatchListState {
  myWatchList: IParsedDomain[]
}

export const initialWatchListState: IWatchListState = {
  myWatchList: []
}
