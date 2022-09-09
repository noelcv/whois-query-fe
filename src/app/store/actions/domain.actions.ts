import { Action } from '@ngrx/store'
import { IQuery } from 'src/app/types/domainQuery.interface';
import { IDomainResult } from 'src/app/types/domainResult.interface';

export enum EDomainActions {
  GetDomainResult = '[Domain] Get Domain Result',
  //TODO: add further actions ex. GetDomainResultSuccess, GetDomainResultError
}

export class GetDomainResult implements Action {
  public readonly type = EDomainActions.GetDomainResult;
  constructor(public payload: IDomainResult) {}
}

export type DomainActions = GetDomainResult;
