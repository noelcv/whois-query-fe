import { Action } from '@ngrx/store'
import { IQuery } from 'src/app/types/domainQuery.interface';

export enum EDomainActions {
  GetDomainResult = '[Domain] Get Domain Result',
  //TODO: add further actions ex. GetDomainResultSuccess, GetDomainResultError
}

export class GetDomainResult implements Action {
  public readonly type = EDomainActions.GetDomainResult;
  constructor(public payload: IQuery) {}
}

export type DomainAction = GetDomainResult;
