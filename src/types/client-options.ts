import ResponseType from './response-type';
import LogLevel from './log-level';
import { TokenResponse } from './token-response';

export interface ClientOptions {
  /** Required - client id to authorize */
  client_id: string;

  /** Optional - redirect URI once request completes */
  redirect_uri?: string;

  /** Optional - will default to 'authorization_code', either authorization_code or token */
  // grant_type?: GrantType;

  /** Optional - will default to 'code', either code or token */
  response_type: ResponseType;

  /** Optional - will default to true */
  usePkce?: boolean;

  /** Optional - will default to 'openid profile' */
  scope?: string;

  /** Optional - state passed in request, a default will be used if not provided */
  state?: string | any;

  /** Optional - default is 'warn' */
  logLevel?: LogLevel;

  /** Optional - callback that will be triggered when a token is available in the library */
  tokenAvailableCallback?: (token: TokenResponse, state?: string | any) => void;
}
