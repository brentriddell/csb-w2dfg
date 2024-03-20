// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import { isRequestOptions } from 'the-real-deal/core';
import * as AssistantsAPI from 'the-real-deal/resources/assistants/assistants';
import * as FilesAPI from 'the-real-deal/resources/assistants/files';

export class Assistants extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create an assistant with a model and instructions.
   */
  create(
    body: AssistantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssistantCreateResponse> {
    return this._client.post('/assistants', { body, ...options });
  }

  /**
   * Retrieves an assistant.
   */
  retrieve(assistantId: string, options?: Core.RequestOptions): Core.APIPromise<AssistantRetrieveResponse> {
    return this._client.get(`/assistants/${assistantId}`, options);
  }

  /**
   * Modifies an assistant.
   */
  update(
    assistantId: string,
    body: AssistantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssistantUpdateResponse> {
    return this._client.post(`/assistants/${assistantId}`, { body, ...options });
  }

  /**
   * Returns a list of assistants.
   */
  list(query?: AssistantListParams, options?: Core.RequestOptions): Core.APIPromise<AssistantListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AssistantListResponse>;
  list(
    query: AssistantListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssistantListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/assistants', { query, ...options });
  }

  /**
   * Delete an assistant.
   */
  delete(assistantId: string, options?: Core.RequestOptions): Core.APIPromise<AssistantDeleteResponse> {
    return this._client.delete(`/assistants/${assistantId}`, options);
  }
}

/**
 * Represents an `assistant` that can call the model and use tools.
 */
export interface AssistantCreateResponse {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the assistant was created.
   */
  created_at: number;

  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description: string | null;

  /**
   * A list of [file](/docs/api-reference/files) IDs attached to this assistant.
   * There can be a maximum of 20 files attached to the assistant. Files are ordered
   * by their creation date in ascending order.
   */
  file_ids: Array<string>;

  /**
   * The system instructions that the assistant uses. The maximum length is 32768
   * characters.
   */
  instructions: string | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models/overview) for descriptions of
   * them.
   */
  model: string;

  /**
   * The name of the assistant. The maximum length is 256 characters.
   */
  name: string | null;

  /**
   * The object type, which is always `assistant`.
   */
  object: 'assistant';

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools: Array<
    | AssistantCreateResponse.AssistantToolsCode
    | AssistantCreateResponse.AssistantToolsRetrieval
    | AssistantCreateResponse.AssistantToolsFunction
  >;
}

export namespace AssistantCreateResponse {
  export interface AssistantToolsCode {
    /**
     * The type of tool being defined: `code_interpreter`
     */
    type: 'code_interpreter';
  }

  export interface AssistantToolsRetrieval {
    /**
     * The type of tool being defined: `retrieval`
     */
    type: 'retrieval';
  }

  export interface AssistantToolsFunction {
    function: AssistantToolsFunction.Function;

    /**
     * The type of tool being defined: `function`
     */
    type: 'function';
  }

  export namespace AssistantToolsFunction {
    export interface Function {
      /**
       * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
       * underscores and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the function does, used by the model to choose when and
       * how to call the function.
       */
      description?: string;

      /**
       * The parameters the functions accepts, described as a JSON Schema object. See the
       * [guide](/docs/guides/text-generation/function-calling) for examples, and the
       * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
       * documentation about the format.
       *
       * Omitting `parameters` defines a function with an empty parameter list.
       */
      parameters?: Record<string, unknown>;
    }
  }
}

/**
 * Represents an `assistant` that can call the model and use tools.
 */
export interface AssistantRetrieveResponse {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the assistant was created.
   */
  created_at: number;

  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description: string | null;

  /**
   * A list of [file](/docs/api-reference/files) IDs attached to this assistant.
   * There can be a maximum of 20 files attached to the assistant. Files are ordered
   * by their creation date in ascending order.
   */
  file_ids: Array<string>;

  /**
   * The system instructions that the assistant uses. The maximum length is 32768
   * characters.
   */
  instructions: string | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models/overview) for descriptions of
   * them.
   */
  model: string;

  /**
   * The name of the assistant. The maximum length is 256 characters.
   */
  name: string | null;

  /**
   * The object type, which is always `assistant`.
   */
  object: 'assistant';

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools: Array<
    | AssistantRetrieveResponse.AssistantToolsCode
    | AssistantRetrieveResponse.AssistantToolsRetrieval
    | AssistantRetrieveResponse.AssistantToolsFunction
  >;
}

export namespace AssistantRetrieveResponse {
  export interface AssistantToolsCode {
    /**
     * The type of tool being defined: `code_interpreter`
     */
    type: 'code_interpreter';
  }

  export interface AssistantToolsRetrieval {
    /**
     * The type of tool being defined: `retrieval`
     */
    type: 'retrieval';
  }

  export interface AssistantToolsFunction {
    function: AssistantToolsFunction.Function;

    /**
     * The type of tool being defined: `function`
     */
    type: 'function';
  }

  export namespace AssistantToolsFunction {
    export interface Function {
      /**
       * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
       * underscores and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the function does, used by the model to choose when and
       * how to call the function.
       */
      description?: string;

      /**
       * The parameters the functions accepts, described as a JSON Schema object. See the
       * [guide](/docs/guides/text-generation/function-calling) for examples, and the
       * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
       * documentation about the format.
       *
       * Omitting `parameters` defines a function with an empty parameter list.
       */
      parameters?: Record<string, unknown>;
    }
  }
}

/**
 * Represents an `assistant` that can call the model and use tools.
 */
export interface AssistantUpdateResponse {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the assistant was created.
   */
  created_at: number;

  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description: string | null;

  /**
   * A list of [file](/docs/api-reference/files) IDs attached to this assistant.
   * There can be a maximum of 20 files attached to the assistant. Files are ordered
   * by their creation date in ascending order.
   */
  file_ids: Array<string>;

  /**
   * The system instructions that the assistant uses. The maximum length is 32768
   * characters.
   */
  instructions: string | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models/overview) for descriptions of
   * them.
   */
  model: string;

  /**
   * The name of the assistant. The maximum length is 256 characters.
   */
  name: string | null;

  /**
   * The object type, which is always `assistant`.
   */
  object: 'assistant';

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools: Array<
    | AssistantUpdateResponse.AssistantToolsCode
    | AssistantUpdateResponse.AssistantToolsRetrieval
    | AssistantUpdateResponse.AssistantToolsFunction
  >;
}

export namespace AssistantUpdateResponse {
  export interface AssistantToolsCode {
    /**
     * The type of tool being defined: `code_interpreter`
     */
    type: 'code_interpreter';
  }

  export interface AssistantToolsRetrieval {
    /**
     * The type of tool being defined: `retrieval`
     */
    type: 'retrieval';
  }

  export interface AssistantToolsFunction {
    function: AssistantToolsFunction.Function;

    /**
     * The type of tool being defined: `function`
     */
    type: 'function';
  }

  export namespace AssistantToolsFunction {
    export interface Function {
      /**
       * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
       * underscores and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the function does, used by the model to choose when and
       * how to call the function.
       */
      description?: string;

      /**
       * The parameters the functions accepts, described as a JSON Schema object. See the
       * [guide](/docs/guides/text-generation/function-calling) for examples, and the
       * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
       * documentation about the format.
       *
       * Omitting `parameters` defines a function with an empty parameter list.
       */
      parameters?: Record<string, unknown>;
    }
  }
}

export interface AssistantListResponse {
  data: Array<AssistantListResponse.Data>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export namespace AssistantListResponse {
  /**
   * Represents an `assistant` that can call the model and use tools.
   */
  export interface Data {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;

    /**
     * The Unix timestamp (in seconds) for when the assistant was created.
     */
    created_at: number;

    /**
     * The description of the assistant. The maximum length is 512 characters.
     */
    description: string | null;

    /**
     * A list of [file](/docs/api-reference/files) IDs attached to this assistant.
     * There can be a maximum of 20 files attached to the assistant. Files are ordered
     * by their creation date in ascending order.
     */
    file_ids: Array<string>;

    /**
     * The system instructions that the assistant uses. The maximum length is 32768
     * characters.
     */
    instructions: string | null;

    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful
     * for storing additional information about the object in a structured format. Keys
     * can be a maximum of 64 characters long and values can be a maxium of 512
     * characters long.
     */
    metadata: unknown | null;

    /**
     * ID of the model to use. You can use the
     * [List models](/docs/api-reference/models/list) API to see all of your available
     * models, or see our [Model overview](/docs/models/overview) for descriptions of
     * them.
     */
    model: string;

    /**
     * The name of the assistant. The maximum length is 256 characters.
     */
    name: string | null;

    /**
     * The object type, which is always `assistant`.
     */
    object: 'assistant';

    /**
     * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
     * assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
     */
    tools: Array<Data.AssistantToolsCode | Data.AssistantToolsRetrieval | Data.AssistantToolsFunction>;
  }

  export namespace Data {
    export interface AssistantToolsCode {
      /**
       * The type of tool being defined: `code_interpreter`
       */
      type: 'code_interpreter';
    }

    export interface AssistantToolsRetrieval {
      /**
       * The type of tool being defined: `retrieval`
       */
      type: 'retrieval';
    }

    export interface AssistantToolsFunction {
      function: AssistantToolsFunction.Function;

      /**
       * The type of tool being defined: `function`
       */
      type: 'function';
    }

    export namespace AssistantToolsFunction {
      export interface Function {
        /**
         * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
         * underscores and dashes, with a maximum length of 64.
         */
        name: string;

        /**
         * A description of what the function does, used by the model to choose when and
         * how to call the function.
         */
        description?: string;

        /**
         * The parameters the functions accepts, described as a JSON Schema object. See the
         * [guide](/docs/guides/text-generation/function-calling) for examples, and the
         * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
         * documentation about the format.
         *
         * Omitting `parameters` defines a function with an empty parameter list.
         */
        parameters?: Record<string, unknown>;
      }
    }
  }
}

export interface AssistantDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'assistant.deleted';
}

export interface AssistantCreateParams {
  /**
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models/overview) for descriptions of
   * them.
   */
  model: string;

  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;

  /**
   * A list of [file](/docs/api-reference/files) IDs attached to this assistant.
   * There can be a maximum of 20 files attached to the assistant. Files are ordered
   * by their creation date in ascending order.
   */
  file_ids?: Array<string>;

  /**
   * The system instructions that the assistant uses. The maximum length is 32768
   * characters.
   */
  instructions?: string | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata?: unknown | null;

  /**
   * The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools?: Array<
    | AssistantCreateParams.AssistantToolsCode
    | AssistantCreateParams.AssistantToolsRetrieval
    | AssistantCreateParams.AssistantToolsFunction
  >;
}

export namespace AssistantCreateParams {
  export interface AssistantToolsCode {
    /**
     * The type of tool being defined: `code_interpreter`
     */
    type: 'code_interpreter';
  }

  export interface AssistantToolsRetrieval {
    /**
     * The type of tool being defined: `retrieval`
     */
    type: 'retrieval';
  }

  export interface AssistantToolsFunction {
    function: AssistantToolsFunction.Function;

    /**
     * The type of tool being defined: `function`
     */
    type: 'function';
  }

  export namespace AssistantToolsFunction {
    export interface Function {
      /**
       * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
       * underscores and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the function does, used by the model to choose when and
       * how to call the function.
       */
      description?: string;

      /**
       * The parameters the functions accepts, described as a JSON Schema object. See the
       * [guide](/docs/guides/text-generation/function-calling) for examples, and the
       * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
       * documentation about the format.
       *
       * Omitting `parameters` defines a function with an empty parameter list.
       */
      parameters?: Record<string, unknown>;
    }
  }
}

export interface AssistantUpdateParams {
  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;

  /**
   * A list of [File](/docs/api-reference/files) IDs attached to this assistant.
   * There can be a maximum of 20 files attached to the assistant. Files are ordered
   * by their creation date in ascending order. If a file was previously attached to
   * the list but does not show up in the list, it will be deleted from the
   * assistant.
   */
  file_ids?: Array<string>;

  /**
   * The system instructions that the assistant uses. The maximum length is 32768
   * characters.
   */
  instructions?: string | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata?: unknown | null;

  /**
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models/overview) for descriptions of
   * them.
   */
  model?: string;

  /**
   * The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `retrieval`, or `function`.
   */
  tools?: Array<
    | AssistantUpdateParams.AssistantToolsCode
    | AssistantUpdateParams.AssistantToolsRetrieval
    | AssistantUpdateParams.AssistantToolsFunction
  >;
}

export namespace AssistantUpdateParams {
  export interface AssistantToolsCode {
    /**
     * The type of tool being defined: `code_interpreter`
     */
    type: 'code_interpreter';
  }

  export interface AssistantToolsRetrieval {
    /**
     * The type of tool being defined: `retrieval`
     */
    type: 'retrieval';
  }

  export interface AssistantToolsFunction {
    function: AssistantToolsFunction.Function;

    /**
     * The type of tool being defined: `function`
     */
    type: 'function';
  }

  export namespace AssistantToolsFunction {
    export interface Function {
      /**
       * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
       * underscores and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the function does, used by the model to choose when and
       * how to call the function.
       */
      description?: string;

      /**
       * The parameters the functions accepts, described as a JSON Schema object. See the
       * [guide](/docs/guides/text-generation/function-calling) for examples, and the
       * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
       * documentation about the format.
       *
       * Omitting `parameters` defines a function with an empty parameter list.
       */
      parameters?: Record<string, unknown>;
    }
  }
}

export interface AssistantListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. `before` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include before=obj_foo in order to
   * fetch the previous page of the list.
   */
  before?: string;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;

  /**
   * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
   * order and `desc` for descending order.
   */
  order?: 'asc' | 'desc';
}

export namespace Assistants {
  export import AssistantCreateResponse = AssistantsAPI.AssistantCreateResponse;
  export import AssistantRetrieveResponse = AssistantsAPI.AssistantRetrieveResponse;
  export import AssistantUpdateResponse = AssistantsAPI.AssistantUpdateResponse;
  export import AssistantListResponse = AssistantsAPI.AssistantListResponse;
  export import AssistantDeleteResponse = AssistantsAPI.AssistantDeleteResponse;
  export import AssistantCreateParams = AssistantsAPI.AssistantCreateParams;
  export import AssistantUpdateParams = AssistantsAPI.AssistantUpdateParams;
  export import AssistantListParams = AssistantsAPI.AssistantListParams;
  export import Files = FilesAPI.Files;
  export import AssistantFile = FilesAPI.AssistantFile;
  export import FileListResponse = FilesAPI.FileListResponse;
  export import FileDeleteResponse = FilesAPI.FileDeleteResponse;
  export import FileCreateParams = FilesAPI.FileCreateParams;
  export import FileListParams = FilesAPI.FileListParams;
}
