// File generated from our OpenAPI spec by Stainless.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import { isRequestOptions } from 'the-real-deal/core';
import * as StepsAPI from 'the-real-deal/resources/threads/runs/steps';

export class Steps extends APIResource {
  /**
   * Retrieves a run step.
   */
  retrieve(
    threadId: string,
    runId: string,
    stepId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StepRetrieveResponse> {
    return this._client.get(`/threads/${threadId}/runs/${runId}/steps/${stepId}`, options);
  }

  /**
   * Returns a list of run steps belonging to a run.
   */
  list(
    threadId: string,
    runId: string,
    query?: StepListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StepListResponse>;
  list(threadId: string, runId: string, options?: Core.RequestOptions): Core.APIPromise<StepListResponse>;
  list(
    threadId: string,
    runId: string,
    query: StepListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StepListResponse> {
    if (isRequestOptions(query)) {
      return this.list(threadId, runId, {}, query);
    }
    return this._client.get(`/threads/${threadId}/runs/${runId}/steps`, { query, ...options });
  }
}

/**
 * Represents a step in execution of a run.
 */
export interface StepRetrieveResponse {
  /**
   * The identifier of the run step, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The ID of the [assistant](/docs/api-reference/assistants) associated with the
   * run step.
   */
  assistant_id: string;

  /**
   * The Unix timestamp (in seconds) for when the run step was cancelled.
   */
  cancelled_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run step completed.
   */
  completed_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run step was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the run step expired. A step is
   * considered expired if the parent run is expired.
   */
  expired_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run step failed.
   */
  failed_at: number | null;

  /**
   * The last error associated with this run step. Will be `null` if there are no
   * errors.
   */
  last_error: StepRetrieveResponse.LastError | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format. Keys
   * can be a maximum of 64 characters long and values can be a maxium of 512
   * characters long.
   */
  metadata: unknown | null;

  /**
   * The object type, which is always `thread.run.step`.
   */
  object: 'thread.run.step';

  /**
   * The ID of the [run](/docs/api-reference/runs) that this run step is a part of.
   */
  run_id: string;

  /**
   * The status of the run step, which can be either `in_progress`, `cancelled`,
   * `failed`, `completed`, or `expired`.
   */
  status: 'in_progress' | 'cancelled' | 'failed' | 'completed' | 'expired';

  /**
   * The details of the run step.
   */
  step_details:
    | StepRetrieveResponse.RunStepDetailsMessageCreationObject
    | StepRetrieveResponse.RunStepDetailsToolCallsObject;

  /**
   * The ID of the [thread](/docs/api-reference/threads) that was run.
   */
  thread_id: string;

  /**
   * The type of run step, which can be either `message_creation` or `tool_calls`.
   */
  type: 'message_creation' | 'tool_calls';

  /**
   * Usage statistics related to the run step. This value will be `null` while the
   * run step's status is `in_progress`.
   */
  usage: StepRetrieveResponse.Usage | null;
}

export namespace StepRetrieveResponse {
  /**
   * The last error associated with this run step. Will be `null` if there are no
   * errors.
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
   * Details of the message creation by the run step.
   */
  export interface RunStepDetailsMessageCreationObject {
    message_creation: RunStepDetailsMessageCreationObject.MessageCreation;

    /**
     * Always `message_creation`.
     */
    type: 'message_creation';
  }

  export namespace RunStepDetailsMessageCreationObject {
    export interface MessageCreation {
      /**
       * The ID of the message that was created by this run step.
       */
      message_id: string;
    }
  }

  /**
   * Details of the tool call.
   */
  export interface RunStepDetailsToolCallsObject {
    /**
     * An array of tool calls the run step was involved in. These can be associated
     * with one of three types of tools: `code_interpreter`, `retrieval`, or
     * `function`.
     */
    tool_calls: Array<
      | RunStepDetailsToolCallsObject.RunStepDetailsToolCallsCodeObject
      | RunStepDetailsToolCallsObject.RunStepDetailsToolCallsRetrievalObject
      | RunStepDetailsToolCallsObject.RunStepDetailsToolCallsFunctionObject
    >;

    /**
     * Always `tool_calls`.
     */
    type: 'tool_calls';
  }

  export namespace RunStepDetailsToolCallsObject {
    /**
     * Details of the Code Interpreter tool call the run step was involved in.
     */
    export interface RunStepDetailsToolCallsCodeObject {
      /**
       * The ID of the tool call.
       */
      id: string;

      /**
       * The Code Interpreter tool call definition.
       */
      code_interpreter: RunStepDetailsToolCallsCodeObject.CodeInterpreter;

      /**
       * The type of tool call. This is always going to be `code_interpreter` for this
       * type of tool call.
       */
      type: 'code_interpreter';
    }

    export namespace RunStepDetailsToolCallsCodeObject {
      /**
       * The Code Interpreter tool call definition.
       */
      export interface CodeInterpreter {
        /**
         * The input to the Code Interpreter tool call.
         */
        input: string;

        /**
         * The outputs from the Code Interpreter tool call. Code Interpreter can output one
         * or more items, including text (`logs`) or images (`image`). Each of these are
         * represented by a different object type.
         */
        outputs: Array<
          | CodeInterpreter.RunStepDetailsToolCallsCodeOutputLogsObject
          | CodeInterpreter.RunStepDetailsToolCallsCodeOutputImageObject
        >;
      }

      export namespace CodeInterpreter {
        /**
         * Text output from the Code Interpreter tool call as part of a run step.
         */
        export interface RunStepDetailsToolCallsCodeOutputLogsObject {
          /**
           * The text output from the Code Interpreter tool call.
           */
          logs: string;

          /**
           * Always `logs`.
           */
          type: 'logs';
        }

        export interface RunStepDetailsToolCallsCodeOutputImageObject {
          image: RunStepDetailsToolCallsCodeOutputImageObject.Image;

          /**
           * Always `image`.
           */
          type: 'image';
        }

        export namespace RunStepDetailsToolCallsCodeOutputImageObject {
          export interface Image {
            /**
             * The [file](/docs/api-reference/files) ID of the image.
             */
            file_id: string;
          }
        }
      }
    }

    export interface RunStepDetailsToolCallsRetrievalObject {
      /**
       * The ID of the tool call object.
       */
      id: string;

      /**
       * For now, this is always going to be an empty object.
       */
      retrieval: unknown;

      /**
       * The type of tool call. This is always going to be `retrieval` for this type of
       * tool call.
       */
      type: 'retrieval';
    }

    export interface RunStepDetailsToolCallsFunctionObject {
      /**
       * The ID of the tool call object.
       */
      id: string;

      /**
       * The definition of the function that was called.
       */
      function: RunStepDetailsToolCallsFunctionObject.Function;

      /**
       * The type of tool call. This is always going to be `function` for this type of
       * tool call.
       */
      type: 'function';
    }

    export namespace RunStepDetailsToolCallsFunctionObject {
      /**
       * The definition of the function that was called.
       */
      export interface Function {
        /**
         * The arguments passed to the function.
         */
        arguments: string;

        /**
         * The name of the function.
         */
        name: string;

        /**
         * The output of the function. This will be `null` if the outputs have not been
         * [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
         */
        output: string | null;
      }
    }
  }

  /**
   * Usage statistics related to the run step. This value will be `null` while the
   * run step's status is `in_progress`.
   */
  export interface Usage {
    /**
     * Number of completion tokens used over the course of the run step.
     */
    completion_tokens: number;

    /**
     * Number of prompt tokens used over the course of the run step.
     */
    prompt_tokens: number;

    /**
     * Total number of tokens used (prompt + completion).
     */
    total_tokens: number;
  }
}

export interface StepListResponse {
  data: Array<StepListResponse.Data>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export namespace StepListResponse {
  /**
   * Represents a step in execution of a run.
   */
  export interface Data {
    /**
     * The identifier of the run step, which can be referenced in API endpoints.
     */
    id: string;

    /**
     * The ID of the [assistant](/docs/api-reference/assistants) associated with the
     * run step.
     */
    assistant_id: string;

    /**
     * The Unix timestamp (in seconds) for when the run step was cancelled.
     */
    cancelled_at: number | null;

    /**
     * The Unix timestamp (in seconds) for when the run step completed.
     */
    completed_at: number | null;

    /**
     * The Unix timestamp (in seconds) for when the run step was created.
     */
    created_at: number;

    /**
     * The Unix timestamp (in seconds) for when the run step expired. A step is
     * considered expired if the parent run is expired.
     */
    expired_at: number | null;

    /**
     * The Unix timestamp (in seconds) for when the run step failed.
     */
    failed_at: number | null;

    /**
     * The last error associated with this run step. Will be `null` if there are no
     * errors.
     */
    last_error: Data.LastError | null;

    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful
     * for storing additional information about the object in a structured format. Keys
     * can be a maximum of 64 characters long and values can be a maxium of 512
     * characters long.
     */
    metadata: unknown | null;

    /**
     * The object type, which is always `thread.run.step`.
     */
    object: 'thread.run.step';

    /**
     * The ID of the [run](/docs/api-reference/runs) that this run step is a part of.
     */
    run_id: string;

    /**
     * The status of the run step, which can be either `in_progress`, `cancelled`,
     * `failed`, `completed`, or `expired`.
     */
    status: 'in_progress' | 'cancelled' | 'failed' | 'completed' | 'expired';

    /**
     * The details of the run step.
     */
    step_details: Data.RunStepDetailsMessageCreationObject | Data.RunStepDetailsToolCallsObject;

    /**
     * The ID of the [thread](/docs/api-reference/threads) that was run.
     */
    thread_id: string;

    /**
     * The type of run step, which can be either `message_creation` or `tool_calls`.
     */
    type: 'message_creation' | 'tool_calls';

    /**
     * Usage statistics related to the run step. This value will be `null` while the
     * run step's status is `in_progress`.
     */
    usage: Data.Usage | null;
  }

  export namespace Data {
    /**
     * The last error associated with this run step. Will be `null` if there are no
     * errors.
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
     * Details of the message creation by the run step.
     */
    export interface RunStepDetailsMessageCreationObject {
      message_creation: RunStepDetailsMessageCreationObject.MessageCreation;

      /**
       * Always `message_creation`.
       */
      type: 'message_creation';
    }

    export namespace RunStepDetailsMessageCreationObject {
      export interface MessageCreation {
        /**
         * The ID of the message that was created by this run step.
         */
        message_id: string;
      }
    }

    /**
     * Details of the tool call.
     */
    export interface RunStepDetailsToolCallsObject {
      /**
       * An array of tool calls the run step was involved in. These can be associated
       * with one of three types of tools: `code_interpreter`, `retrieval`, or
       * `function`.
       */
      tool_calls: Array<
        | RunStepDetailsToolCallsObject.RunStepDetailsToolCallsCodeObject
        | RunStepDetailsToolCallsObject.RunStepDetailsToolCallsRetrievalObject
        | RunStepDetailsToolCallsObject.RunStepDetailsToolCallsFunctionObject
      >;

      /**
       * Always `tool_calls`.
       */
      type: 'tool_calls';
    }

    export namespace RunStepDetailsToolCallsObject {
      /**
       * Details of the Code Interpreter tool call the run step was involved in.
       */
      export interface RunStepDetailsToolCallsCodeObject {
        /**
         * The ID of the tool call.
         */
        id: string;

        /**
         * The Code Interpreter tool call definition.
         */
        code_interpreter: RunStepDetailsToolCallsCodeObject.CodeInterpreter;

        /**
         * The type of tool call. This is always going to be `code_interpreter` for this
         * type of tool call.
         */
        type: 'code_interpreter';
      }

      export namespace RunStepDetailsToolCallsCodeObject {
        /**
         * The Code Interpreter tool call definition.
         */
        export interface CodeInterpreter {
          /**
           * The input to the Code Interpreter tool call.
           */
          input: string;

          /**
           * The outputs from the Code Interpreter tool call. Code Interpreter can output one
           * or more items, including text (`logs`) or images (`image`). Each of these are
           * represented by a different object type.
           */
          outputs: Array<
            | CodeInterpreter.RunStepDetailsToolCallsCodeOutputLogsObject
            | CodeInterpreter.RunStepDetailsToolCallsCodeOutputImageObject
          >;
        }

        export namespace CodeInterpreter {
          /**
           * Text output from the Code Interpreter tool call as part of a run step.
           */
          export interface RunStepDetailsToolCallsCodeOutputLogsObject {
            /**
             * The text output from the Code Interpreter tool call.
             */
            logs: string;

            /**
             * Always `logs`.
             */
            type: 'logs';
          }

          export interface RunStepDetailsToolCallsCodeOutputImageObject {
            image: RunStepDetailsToolCallsCodeOutputImageObject.Image;

            /**
             * Always `image`.
             */
            type: 'image';
          }

          export namespace RunStepDetailsToolCallsCodeOutputImageObject {
            export interface Image {
              /**
               * The [file](/docs/api-reference/files) ID of the image.
               */
              file_id: string;
            }
          }
        }
      }

      export interface RunStepDetailsToolCallsRetrievalObject {
        /**
         * The ID of the tool call object.
         */
        id: string;

        /**
         * For now, this is always going to be an empty object.
         */
        retrieval: unknown;

        /**
         * The type of tool call. This is always going to be `retrieval` for this type of
         * tool call.
         */
        type: 'retrieval';
      }

      export interface RunStepDetailsToolCallsFunctionObject {
        /**
         * The ID of the tool call object.
         */
        id: string;

        /**
         * The definition of the function that was called.
         */
        function: RunStepDetailsToolCallsFunctionObject.Function;

        /**
         * The type of tool call. This is always going to be `function` for this type of
         * tool call.
         */
        type: 'function';
      }

      export namespace RunStepDetailsToolCallsFunctionObject {
        /**
         * The definition of the function that was called.
         */
        export interface Function {
          /**
           * The arguments passed to the function.
           */
          arguments: string;

          /**
           * The name of the function.
           */
          name: string;

          /**
           * The output of the function. This will be `null` if the outputs have not been
           * [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
           */
          output: string | null;
        }
      }
    }

    /**
     * Usage statistics related to the run step. This value will be `null` while the
     * run step's status is `in_progress`.
     */
    export interface Usage {
      /**
       * Number of completion tokens used over the course of the run step.
       */
      completion_tokens: number;

      /**
       * Number of prompt tokens used over the course of the run step.
       */
      prompt_tokens: number;

      /**
       * Total number of tokens used (prompt + completion).
       */
      total_tokens: number;
    }
  }
}

export interface StepListParams {
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

export namespace Steps {
  export import StepRetrieveResponse = StepsAPI.StepRetrieveResponse;
  export import StepListResponse = StepsAPI.StepListResponse;
  export import StepListParams = StepsAPI.StepListParams;
}
