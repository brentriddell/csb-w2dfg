// File generated from our OpenAPI spec by Stainless.

import * as Core from 'the-real-deal/core';
import { APIResource } from 'the-real-deal/resource';
import * as EditsAPI from 'the-real-deal/resources/images/edits';
import * as Shared from 'the-real-deal/resources/shared';
import { type Uploadable, multipartFormRequestOptions } from 'the-real-deal/core';

export class Edits extends APIResource {
  /**
   * Creates an edited or extended image given an original image and a prompt.
   */
  create(body: EditCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ImagesResponse> {
    return this._client.post('/images/edits', multipartFormRequestOptions({ body, ...options }));
  }
}

export interface EditCreateParams {
  /**
   * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask
   * is not provided, image must have transparency, which will be used as the mask.
   */
  image: Uploadable;

  /**
   * A text description of the desired image(s). The maximum length is 1000
   * characters.
   */
  prompt: string;

  /**
   * An additional image whose fully transparent areas (e.g. where alpha is zero)
   * indicate where `image` should be edited. Must be a valid PNG file, less than
   * 4MB, and have the same dimensions as `image`.
   */
  mask?: Uploadable;

  /**
   * The model to use for image generation. Only `dall-e-2` is supported at this
   * time.
   */
  model?: (string & {}) | 'dall-e-2' | null;

  /**
   * The number of images to generate. Must be between 1 and 10.
   */
  n?: number | null;

  /**
   * The format in which the generated images are returned. Must be one of `url` or
   * `b64_json`.
   */
  response_format?: 'url' | 'b64_json' | null;

  /**
   * The size of the generated images. Must be one of `256x256`, `512x512`, or
   * `1024x1024`.
   */
  size?: '256x256' | '512x512' | '1024x1024' | null;

  /**
   * A unique identifier representing your end-user, which can help OpenAI to monitor
   * and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
}

export namespace Edits {
  export import EditCreateParams = EditsAPI.EditCreateParams;
}
