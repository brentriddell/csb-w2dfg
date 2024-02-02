// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'the-real-deal/resource';
import * as SpeechAPI from 'the-real-deal/resources/audio/speech';
import * as TranscriptionsAPI from 'the-real-deal/resources/audio/transcriptions';
import * as TranslationsAPI from 'the-real-deal/resources/audio/translations';

export class Audio extends APIResource {
  speech: SpeechAPI.Speech = new SpeechAPI.Speech(this._client);
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);
}

export namespace Audio {
  export import Speech = SpeechAPI.Speech;
  export import SpeechCreateParams = SpeechAPI.SpeechCreateParams;
  export import Transcriptions = TranscriptionsAPI.Transcriptions;
  export import TranscriptionCreateResponse = TranscriptionsAPI.TranscriptionCreateResponse;
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
  export import Translations = TranslationsAPI.Translations;
  export import TranslationCreateResponse = TranslationsAPI.TranslationCreateResponse;
  export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
}
