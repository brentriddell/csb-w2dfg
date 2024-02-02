// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'the-real-deal/resource';
import * as CompletionsAPI from 'the-real-deal/resources/chat/completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

export namespace Chat {
  export import Completions = CompletionsAPI.Completions;
  export import CompletionCreateResponse = CompletionsAPI.CompletionCreateResponse;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
}
