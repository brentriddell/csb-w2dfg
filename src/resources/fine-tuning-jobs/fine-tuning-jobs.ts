// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import { isRequestOptions } from 'the-real-deal/core';
import * as FineTuningJobsAPI from 'the-real-deal/resources/fine-tuning-jobs/fine-tuning-jobs';
import * as EventsAPI from 'the-real-deal/resources/fine-tuning-jobs/events';

export class FineTuningJobs extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);

  /**
   * Creates a fine-tuning job which begins the process of creating a new model from
   * a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name
   * of the fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](/docs/guides/fine-tuning)
   */
  create(body: FineTuningJobCreateParams, options?: Core.RequestOptions): Core.APIPromise<FineTuningJob> {
    return this._client.post('/fine_tuning/jobs', { body, ...options });
  }

  /**
   * Get info about a fine-tuning job.
   *
   * [Learn more about fine-tuning](/docs/guides/fine-tuning)
   */
  retrieve(fineTuningJobId: string, options?: Core.RequestOptions): Core.APIPromise<FineTuningJob> {
    return this._client.get(`/fine_tuning/jobs/${fineTuningJobId}`, options);
  }

  /**
   * List your organization's fine-tuning jobs
   */
  list(
    query?: FineTuningJobListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FineTuningJobListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FineTuningJobListResponse>;
  list(
    query: FineTuningJobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FineTuningJobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/fine_tuning/jobs', { query, ...options });
  }

  /**
   * Immediately cancel a fine-tune job.
   */
  cancel(fineTuningJobId: string, options?: Core.RequestOptions): Core.APIPromise<FineTuningJob> {
    return this._client.post(`/fine_tuning/jobs/${fineTuningJobId}/cancel`, options);
  }
}

/**
 * The `fine_tuning.job` object represents a fine-tuning job that has been created
 * through the API.
 */
export interface FineTuningJob {
  /**
   * The object identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the fine-tuning job was created.
   */
  created_at: number;

  /**
   * For fine-tuning jobs that have `failed`, this will contain more information on
   * the cause of the failure.
   */
  error: FineTuningJob.Error | null;

  /**
   * The name of the fine-tuned model that is being created. The value will be null
   * if the fine-tuning job is still running.
   */
  fine_tuned_model: string | null;

  /**
   * The Unix timestamp (in seconds) for when the fine-tuning job was finished. The
   * value will be null if the fine-tuning job is still running.
   */
  finished_at: number | null;

  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  hyperparameters: FineTuningJob.Hyperparameters;

  /**
   * The base model that is being fine-tuned.
   */
  model: string;

  /**
   * The object type, which is always "fine_tuning.job".
   */
  object: 'fine_tuning.job';

  /**
   * The organization that owns the fine-tuning job.
   */
  organization_id: string;

  /**
   * The compiled results file ID(s) for the fine-tuning job. You can retrieve the
   * results with the [Files API](/docs/api-reference/files/retrieve-contents).
   */
  result_files: Array<string>;

  /**
   * The current status of the fine-tuning job, which can be either
   * `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.
   */
  status: 'validating_files' | 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled';

  /**
   * The total number of billable tokens processed by this fine-tuning job. The value
   * will be null if the fine-tuning job is still running.
   */
  trained_tokens: number | null;

  /**
   * The file ID used for training. You can retrieve the training data with the
   * [Files API](/docs/api-reference/files/retrieve-contents).
   */
  training_file: string;

  /**
   * The file ID used for validation. You can retrieve the validation results with
   * the [Files API](/docs/api-reference/files/retrieve-contents).
   */
  validation_file: string | null;
}

export namespace FineTuningJob {
  /**
   * For fine-tuning jobs that have `failed`, this will contain more information on
   * the cause of the failure.
   */
  export interface Error {
    /**
     * A machine-readable error code.
     */
    code: string;

    /**
     * A human-readable error message.
     */
    message: string;

    /**
     * The parameter that was invalid, usually `training_file` or `validation_file`.
     * This field will be null if the failure was not parameter-specific.
     */
    param: string | null;
  }

  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  export interface Hyperparameters {
    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset. "auto" decides the optimal number of epochs based
     * on the size of the dataset. If setting the number manually, we support any
     * number between 1 and 50 epochs.
     */
    n_epochs: 'auto' | number;
  }
}

export interface FineTuningJobListResponse {
  data: Array<FineTuningJob>;

  has_more: boolean;

  object: 'list';
}

export interface FineTuningJobCreateParams {
  /**
   * The name of the model to fine-tune. You can select one of the
   * [supported models](/docs/guides/fine-tuning/what-models-can-be-fine-tuned).
   */
  model: (string & {}) | 'babbage-002' | 'davinci-002' | 'gpt-3.5-turbo';

  /**
   * The ID of an uploaded file that contains training data.
   *
   * See [upload file](/docs/api-reference/files/upload) for how to upload a file.
   *
   * Your dataset must be formatted as a JSONL file. Additionally, you must upload
   * your file with the purpose `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  training_file: string;

  /**
   * The hyperparameters used for the fine-tuning job.
   */
  hyperparameters?: FineTuningJobCreateParams.Hyperparameters;

  /**
   * A string of up to 18 characters that will be added to your fine-tuned model
   * name.
   *
   * For example, a `suffix` of "custom-model-name" would produce a model name like
   * `ft:gpt-3.5-turbo:openai:custom-model-name:7p4lURel`.
   */
  suffix?: string | null;

  /**
   * The ID of an uploaded file that contains validation data.
   *
   * If you provide this file, the data is used to generate validation metrics
   * periodically during fine-tuning. These metrics can be viewed in the fine-tuning
   * results file. The same data should not be present in both train and validation
   * files.
   *
   * Your dataset must be formatted as a JSONL file. You must upload your file with
   * the purpose `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  validation_file?: string | null;
}

export namespace FineTuningJobCreateParams {
  /**
   * The hyperparameters used for the fine-tuning job.
   */
  export interface Hyperparameters {
    /**
     * Number of examples in each batch. A larger batch size means that model
     * parameters are updated less frequently, but with lower variance.
     */
    batch_size?: 'auto' | number;

    /**
     * Scaling factor for the learning rate. A smaller learning rate may be useful to
     * avoid overfitting.
     */
    learning_rate_multiplier?: 'auto' | number;

    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset.
     */
    n_epochs?: 'auto' | number;
  }
}

export interface FineTuningJobListParams {
  /**
   * Identifier for the last job from the previous pagination request.
   */
  after?: string;

  /**
   * Number of fine-tuning jobs to retrieve.
   */
  limit?: number;
}

export namespace FineTuningJobs {
  export import FineTuningJob = FineTuningJobsAPI.FineTuningJob;
  export import FineTuningJobListResponse = FineTuningJobsAPI.FineTuningJobListResponse;
  export import FineTuningJobCreateParams = FineTuningJobsAPI.FineTuningJobCreateParams;
  export import FineTuningJobListParams = FineTuningJobsAPI.FineTuningJobListParams;
  export import Events = EventsAPI.Events;
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventListParams = EventsAPI.EventListParams;
}
