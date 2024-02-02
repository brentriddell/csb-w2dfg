// File generated from our OpenAPI spec by Stainless.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import { isRequestOptions } from 'the-real-deal/core';
import * as RunsAPI from 'the-real-deal/resources/threads/runs/runs';
import * as StepsAPI from 'the-real-deal/resources/threads/runs/steps';

export class Runs extends APIResource {
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);

  /**
   * Modifies a run.
   */
  create(
    threadId: string,
    runId: string,
    body: RunCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Run> {
    return this._client.post(`/threads/${threadId}/runs/${runId}`, { body, ...options });
  }

  /**
   * Retrieves a run.
   */
  retrieve(threadId: string, runId: string, options?: Core.RequestOptions): Core.APIPromise<Run> {
    return this._client.get(`/threads/${threadId}/runs/${runId}`, options);
  }

  /**
   * Returns a list of runs belonging to a thread.
   */
  list(
    threadId: string,
    query?: RunListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RunListResponse>;
  list(threadId: string, options?: Core.RequestOptions): Core.APIPromise<RunListResponse>;
  list(
    threadId: string,
    query: RunListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RunListResponse> {
    if (isRequestOptions(query)) {
      return this.list(threadId, {}, query);
    }
    return this._client.get(`/threads/${threadId}/runs`, { query, ...options });
  }

  /**
   * Cancels a run that is `in_progress`.
   */
  cancel(threadId: string, runId: string, options?: Core.RequestOptions): Core.APIPromise<Run> {
    return this._client.post(`/threads/${threadId}/runs/${runId}/cancel`, options);
  }

  /**
   * When a run has the `status: "requires_action"` and `required_action.type` is
   * `submit_tool_outputs`, this endpoint can be used to submit the outputs from the
   * tool calls once they're all completed. All outputs must be submitted in a single
   * request.
   */
  submitToolOutputs(
    threadId: string,
    runId: string,
    body: RunSubmitToolOutputsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Run> {
    return this._client.post(`/threads/${threadId}/runs/${runId}/submit_tool_outputs`, { body, ...options });
  }
}

/**
 * Represents an execution run on a [thread](/docs/api-reference/threads).
 */
export interface Run {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The ID of the [assistant](/docs/api-reference/assistants) used for execution of
   * this run.
   */
  assistant_id: string;

  /**
   * The Unix timestamp (in seconds) for when the run was cancelled.
   */
  cancelled_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run was completed.
   */
  completed_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the run will expire.
   */
  expires_at: number;

  /**
   * The Unix timestamp (in seconds) for when the run failed.
   */
  failed_at: number | null;

  /**
   * The list of [File](/docs/api-reference/files) IDs the
   * [assistant](/docs/api-reference/assistants) used for this run.
   */
  file_ids: Array<string>;

  /**
   * The instructions that the [assistant](/docs/api-reference/assistants) used for
   * this run.
   */
  instructions: string;

  /**
   * The last error associated with this run. Will be `null` if there are no errors.
   */
  last_error: Run.LastError | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * The model that the [assistant](/docs/api-reference/assistants) used for this
   * run.
   */
  model: string;

  /**
   * The object type, which is always `thread.run`.
   */
  object: 'thread.run';

  /**
   * Details on the action required to continue the run. Will be `null` if no action
   * is required.
   */
  required_action: Run.RequiredAction | null;

  /**
   * The Unix timestamp (in seconds) for when the run was started.
   */
  started_at: number | null;

  /**
   * The status of the run, which can be either `queued`, `in_progress`,
   * `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, or
   * `expired`.
   */
  status:
    | 'queued'
    | 'in_progress'
    | 'requires_action'
    | 'cancelling'
    | 'cancelled'
    | 'failed'
    | 'completed'
    | 'expired';

  /**
   * The ID of the [thread](/docs/api-reference/threads) that was executed on as a
   * part of this run.
   */
  thread_id: string;

  /**
   * The list of tools that the [assistant](/docs/api-reference/assistants) used for
   * this run.
   */
  tools: Array<Run.AssistantToolsCode | Run.AssistantToolsRetrieval | Run.AssistantToolsFunction>;

  /**
   * Usage statistics related to the run. This value will be `null` if the run is not
   * in a terminal state (i.e. `in_progress`, `queued`, etc.).
   */
  usage: Run.Usage | null;
}

export namespace Run {
  /**
   * The last error associated with this run. Will be `null` if there are no errors.
   */
  export interface LastError {
    /**
     * One of `server_error` or `rate_limit_exceeded`.
     */
    code: 'server_error' | 'rate_limit_exceeded';

    /**
     * A human-readable description of the error.
     */
    message: string;
  }

  /**
   * Details on the action required to continue the run. Will be `null` if no action
   * is required.
   */
  export interface RequiredAction {
    /**
     * Details on the tool outputs needed for this run to continue.
     */
    submit_tool_outputs: RequiredAction.SubmitToolOutputs;

    /**
     * For now, this is always `submit_tool_outputs`.
     */
    type: 'submit_tool_outputs';
  }

  export namespace RequiredAction {
    /**
     * Details on the tool outputs needed for this run to continue.
     */
    export interface SubmitToolOutputs {
      /**
       * A list of the relevant tool calls.
       */
      tool_calls: Array<SubmitToolOutputs.ToolCall>;
    }

    export namespace SubmitToolOutputs {
      /**
       * Tool call objects
       */
      export interface ToolCall {
        /**
         * The ID of the tool call. This ID must be referenced when you submit the tool
         * outputs in using the
         * [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs)
         * endpoint.
         */
        id: string;

        /**
         * The function definition.
         */
        function: ToolCall.Function;

        /**
         * The type of tool call the output is required for. For now, this is always
         * `function`.
         */
        type: 'function';
      }

      export namespace ToolCall {
        /**
         * The function definition.
         */
        export interface Function {
          /**
           * The arguments that the model expects you to pass to the function.
           */
          arguments: string;

          /**
           * The name of the function.
           */
          name: string;
        }
      }
    }
  }

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

  /**
   * Usage statistics related to the run. This value will be `null` if the run is not
   * in a terminal state (i.e. `in_progress`, `queued`, etc.).
   */
  export interface Usage {
    /**
     * Number of completion tokens used over the course of the run.
     */
    completion_tokens: number;

    /**
     * Number of prompt tokens used over the course of the run.
     */
    prompt_tokens: number;

    /**
     * Total number of tokens used (prompt + completion).
     */
    total_tokens: number;
  }
}

export interface RunListResponse {
  data: Array<Run>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface RunCreateParams {
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata?: unknown | null;
}

export interface RunListParams {
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

export interface RunSubmitToolOutputsParams {
  /**
   * A list of tools for which the outputs are being submitted.
   */
  tool_outputs: Array<RunSubmitToolOutputsParams.ToolOutput>;
}

export namespace RunSubmitToolOutputsParams {
  export interface ToolOutput {
    /**
     * The output of the tool call to be submitted to continue the run.
     */
    output?: string;

    /**
     * The ID of the tool call in the `required_action` object within the run object
     * the output is being submitted for.
     */
    tool_call_id?: string;
  }
}

export namespace Runs {
  export import Run = RunsAPI.Run;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunCreateParams = RunsAPI.RunCreateParams;
  export import RunListParams = RunsAPI.RunListParams;
  export import RunSubmitToolOutputsParams = RunsAPI.RunSubmitToolOutputsParams;
  export import Steps = StepsAPI.Steps;
  export import StepRetrieveResponse = StepsAPI.StepRetrieveResponse;
  export import StepListResponse = StepsAPI.StepListResponse;
  export import StepListParams = StepsAPI.StepListParams;
}
