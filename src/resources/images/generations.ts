// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import * as GenerationsAPI from 'the-real-deal/resources/images/generations';
import * as Shared from 'the-real-deal/resources/shared';

export class Generations extends APIResource {
  /**
   * Creates an image given a prompt.
   */
  create(
    body: GenerationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ImagesResponse> {
    return this._client.post('/images/generations', { body, ...options });
  }
}

export interface GenerationCreateParams {
  /**
   * A text description of the desired image(s). The maximum length is 1000
   * characters for `dall-e-2` and 4000 characters for `dall-e-3`.
   */
  prompt: string;

  /**
   * The model to use for image generation.
   */
  model?: (string & {}) | 'dall-e-2' | 'dall-e-3' | null;

  /**
   * The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only
   * `n=1` is supported.
   */
  n?: number | null;

  /**
   * The quality of the image that will be generated. `hd` creates images with finer
   * details and greater consistency across the image. This param is only supported
   * for `dall-e-3`.
   */
  quality?: 'standard' | 'hd';

  /**
   * The format in which the generated images are returned. Must be one of `url` or
   * `b64_json`.
   */
  response_format?: 'url' | 'b64_json' | null;

  /**
   * The size of the generated images. Must be one of `256x256`, `512x512`, or
   * `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or
   * `1024x1792` for `dall-e-3` models.
   */
  size?: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792' | null;

  /**
   * The style of the generated images. Must be one of `vivid` or `natural`. Vivid
   * causes the model to lean towards generating hyper-real and dramatic images.
   * Natural causes the model to produce more natural, less hyper-real looking
   * images. This param is only supported for `dall-e-3`.
   */
  style?: 'vivid' | 'natural' | null;

  /**
   * A unique identifier representing your end-user, which can help OpenAI to monitor
   * and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
}

export namespace Generations {
  export import GenerationCreateParams = GenerationsAPI.GenerationCreateParams;
}
