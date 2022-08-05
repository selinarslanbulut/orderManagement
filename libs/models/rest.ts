import { HttpHeaders, HttpParams } from '@angular/common/http';
import { eHTTP } from '../enums/http';
import { Loader } from './loader';

export namespace Rest {
  export interface Config {
    desc: string;
    endpoint?: string;
    loaders?: Loader.Item[] | Loader.Item;
    observe?: eHTTP.Observe;
    skipError?: boolean;
    requestMapper?: (body: any) => any;
    responseMapper?: (body: any) => any;
  }

  export interface CacheConfig {
    cacheEnabled: boolean;
    ttl?: number; // example 60000; 1 minute cache
    cacheId?: string;
    prefix?: string;
  }

  export interface Request<T = null> {
    body?: T;
    headers?:
      | HttpHeaders
      | {
      [header: string]: string | string[];
    };
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'CONNECT' | 'TRACE' | 'OPTIONS';
    params?:
      | HttpParams
      | {
      [param: string]: string | number | boolean | any[];
    };
    reportProgress?: boolean;
    responseType?: eHTTP.ResponseType;
    url: string;
    withCredentials?: boolean;
    withCache?: CacheConfig;
  }

  export interface Error {
    desc: string;
    body: any;
    status: number;
    skipError?: boolean;
  }

  export type State = {
    errors: Error[];
  };
}
