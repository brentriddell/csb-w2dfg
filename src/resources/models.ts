// File generated from our OpenAPI spec by Stainless.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import * as ModelsAPI from 'the-real-deal/resources/models';

export class Models extends APIResource {
  /**
   * Retrieves a model instance, providing basic information about the model such as
   * the owner and permissioning.
   */
  list(model: string, options?: Core.RequestOptions): Core.APIPromise<Model> {
    return this._client.get(`/models/${model}`, options);
  }

  /**
   * Delete a fine-tuned model. You must have the Owner role in your organization to
   * delete a model.
   */
  delete(model: string, options?: Core.RequestOptions): Core.APIPromise<ModelDeleteResponse> {
    return this._client.delete(`/models/${model}`, options);
  }
}

/**
 * Describes an OpenAI model offering that can be used with the API.
 */
export interface Model {
  /**
   * The model identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) when the model was created.
   */
  created: number;

  /**
   * The object type, which is always "model".
   */
  object: 'model';

  /**
   * The organization that owns the model.
   */
  owned_by: string;
}

export interface ModelDeleteResponse {
  id: string;

  deleted: boolean;

  object: string;
}

export namespace Models {
  export import Model = ModelsAPI.Model;
  export import ModelDeleteResponse = ModelsAPI.ModelDeleteResponse;
}
