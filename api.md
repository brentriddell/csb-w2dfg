# Shared

Types:

- <code><a href="./src/resources/shared.ts">ImagesResponse</a></code>

# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /completions">client.completions.<a href="./src/resources/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

# Images

## Generations

Methods:

- <code title="post /images/generations">client.images.generations.<a href="./src/resources/images/generations.ts">create</a>({ ...params }) -> ImagesResponse</code>

## Edits

Methods:

- <code title="post /images/edits">client.images.edits.<a href="./src/resources/images/edits.ts">create</a>({ ...params }) -> ImagesResponse</code>

## Variations

Methods:

- <code title="post /images/variations">client.images.variations.<a href="./src/resources/images/variations.ts">create</a>({ ...params }) -> ImagesResponse</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingCreateResponse</a></code>

Methods:

- <code title="post /embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> EmbeddingCreateResponse</code>

# Audio

## Speech

Methods:

- <code title="post /audio/speech">client.audio.speech.<a href="./src/resources/audio/speech.ts">create</a>({ ...params }) -> Response</code>

## Transcriptions

Types:

- <code><a href="./src/resources/audio/transcriptions.ts">TranscriptionCreateResponse</a></code>

Methods:

- <code title="post /audio/transcriptions">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>

## Translations

Types:

- <code><a href="./src/resources/audio/translations.ts">TranslationCreateResponse</a></code>

Methods:

- <code title="post /audio/translations">client.audio.translations.<a href="./src/resources/audio/translations.ts">create</a>({ ...params }) -> TranslationCreateResponse</code>

# Files

Types:

- <code><a href="./src/resources/files/files.ts">OpenAIFile</a></code>
- <code><a href="./src/resources/files/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="post /files">client.files.<a href="./src/resources/files/files.ts">create</a>({ ...params }) -> OpenAIFile</code>
- <code title="get /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">retrieve</a>(fileId) -> OpenAIFile</code>
- <code title="get /files">client.files.<a href="./src/resources/files/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /files/{file_id}">client.files.<a href="./src/resources/files/files.ts">delete</a>(fileId) -> FileDeleteResponse</code>

## Content

Types:

- <code><a href="./src/resources/files/content.ts">ContentRetrieveResponse</a></code>

Methods:

- <code title="get /files/{file_id}/content">client.files.content.<a href="./src/resources/files/content.ts">retrieve</a>(fileId) -> string</code>

# FineTuningJobs

Types:

- <code><a href="./src/resources/fine-tuning-jobs/fine-tuning-jobs.ts">FineTuningJob</a></code>
- <code><a href="./src/resources/fine-tuning-jobs/fine-tuning-jobs.ts">FineTuningJobListResponse</a></code>

Methods:

- <code title="post /fine_tuning/jobs">client.fineTuningJobs.<a href="./src/resources/fine-tuning-jobs/fine-tuning-jobs.ts">create</a>({ ...params }) -> FineTuningJob</code>
- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}">client.fineTuningJobs.<a href="./src/resources/fine-tuning-jobs/fine-tuning-jobs.ts">retrieve</a>(fineTuningJobId) -> FineTuningJob</code>
- <code title="get /fine_tuning/jobs">client.fineTuningJobs.<a href="./src/resources/fine-tuning-jobs/fine-tuning-jobs.ts">list</a>({ ...params }) -> FineTuningJobListResponse</code>
- <code title="post /fine_tuning/jobs/{fine_tuning_job_id}/cancel">client.fineTuningJobs.<a href="./src/resources/fine-tuning-jobs/fine-tuning-jobs.ts">cancel</a>(fineTuningJobId) -> FineTuningJob</code>

## Events

Types:

- <code><a href="./src/resources/fine-tuning-jobs/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}/events">client.fineTuningJobs.events.<a href="./src/resources/fine-tuning-jobs/events.ts">list</a>(fineTuningJobId, { ...params }) -> EventListResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelDeleteResponse</a></code>

Methods:

- <code title="get /models/{model}">client.models.<a href="./src/resources/models.ts">list</a>(model) -> Model</code>
- <code title="delete /models/{model}">client.models.<a href="./src/resources/models.ts">delete</a>(model) -> ModelDeleteResponse</code>

# Moderations

Types:

- <code><a href="./src/resources/moderations.ts">ModerationCreateResponse</a></code>

Methods:

- <code title="post /moderations">client.moderations.<a href="./src/resources/moderations.ts">create</a>({ ...params }) -> ModerationCreateResponse</code>

# Assistants

Types:

- <code><a href="./src/resources/assistants/assistants.ts">AssistantCreateResponse</a></code>
- <code><a href="./src/resources/assistants/assistants.ts">AssistantRetrieveResponse</a></code>
- <code><a href="./src/resources/assistants/assistants.ts">AssistantUpdateResponse</a></code>
- <code><a href="./src/resources/assistants/assistants.ts">AssistantListResponse</a></code>
- <code><a href="./src/resources/assistants/assistants.ts">AssistantDeleteResponse</a></code>

Methods:

- <code title="post /assistants">client.assistants.<a href="./src/resources/assistants/assistants.ts">create</a>({ ...params }) -> AssistantCreateResponse</code>
- <code title="get /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants/assistants.ts">retrieve</a>(assistantId) -> AssistantRetrieveResponse</code>
- <code title="post /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants/assistants.ts">update</a>(assistantId, { ...params }) -> AssistantUpdateResponse</code>
- <code title="get /assistants">client.assistants.<a href="./src/resources/assistants/assistants.ts">list</a>({ ...params }) -> AssistantListResponse</code>
- <code title="delete /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants/assistants.ts">delete</a>(assistantId) -> AssistantDeleteResponse</code>

## Files

Types:

- <code><a href="./src/resources/assistants/files.ts">AssistantFile</a></code>
- <code><a href="./src/resources/assistants/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/assistants/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="post /assistants/{assistant_id}/files">client.assistants.files.<a href="./src/resources/assistants/files.ts">create</a>(assistantId, { ...params }) -> AssistantFile</code>
- <code title="get /assistants/{assistant_id}/files/{file_id}">client.assistants.files.<a href="./src/resources/assistants/files.ts">retrieve</a>(assistantId, fileId) -> AssistantFile</code>
- <code title="get /assistants/{assistant_id}/files">client.assistants.files.<a href="./src/resources/assistants/files.ts">list</a>(assistantId, { ...params }) -> FileListResponse</code>
- <code title="delete /assistants/{assistant_id}/files/{file_id}">client.assistants.files.<a href="./src/resources/assistants/files.ts">delete</a>(assistantId, fileId) -> FileDeleteResponse</code>

# Threads

Types:

- <code><a href="./src/resources/threads/threads.ts">Thread</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadDeleteResponse</a></code>

Methods:

- <code title="post /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">create</a>(threadId, { ...params }) -> Thread</code>
- <code title="get /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">retrieve</a>(threadId) -> Thread</code>
- <code title="delete /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">delete</a>(threadId) -> ThreadDeleteResponse</code>

## Messages

Types:

- <code><a href="./src/resources/threads/messages/messages.ts">Message</a></code>
- <code><a href="./src/resources/threads/messages/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="post /threads/{thread_id}/messages">client.threads.messages.<a href="./src/resources/threads/messages/messages.ts">create</a>(threadId, { ...params }) -> Message</code>
- <code title="get /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages/messages.ts">retrieve</a>(threadId, messageId) -> Message</code>
- <code title="post /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages/messages.ts">update</a>(threadId, messageId, { ...params }) -> Message</code>
- <code title="get /threads/{thread_id}/messages">client.threads.messages.<a href="./src/resources/threads/messages/messages.ts">list</a>(threadId, { ...params }) -> MessageListResponse</code>

### Files

Types:

- <code><a href="./src/resources/threads/messages/files.ts">File</a></code>
- <code><a href="./src/resources/threads/messages/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /threads/{thread_id}/messages/{message_id}/files/{file_id}">client.threads.messages.files.<a href="./src/resources/threads/messages/files.ts">retrieve</a>(threadId, messageId, fileId) -> File</code>
- <code title="get /threads/{thread_id}/messages/{message_id}/files">client.threads.messages.files.<a href="./src/resources/threads/messages/files.ts">list</a>(threadId, messageId, { ...params }) -> FileListResponse</code>

## Runs

Types:

- <code><a href="./src/resources/threads/runs/runs.ts">Run</a></code>
- <code><a href="./src/resources/threads/runs/runs.ts">RunListResponse</a></code>

Methods:

- <code title="post /threads/{thread_id}/runs/{run_id}">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">create</a>(threadId, runId, { ...params }) -> Run</code>
- <code title="get /threads/{thread_id}/runs/{run_id}">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">retrieve</a>(threadId, runId) -> Run</code>
- <code title="get /threads/{thread_id}/runs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">list</a>(threadId, { ...params }) -> RunListResponse</code>
- <code title="post /threads/{thread_id}/runs/{run_id}/cancel">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">cancel</a>(threadId, runId) -> Run</code>
- <code title="post /threads/{thread_id}/runs/{run_id}/submit_tool_outputs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">submitToolOutputs</a>(threadId, runId, { ...params }) -> Run</code>

### Steps

Types:

- <code><a href="./src/resources/threads/runs/steps.ts">StepRetrieveResponse</a></code>
- <code><a href="./src/resources/threads/runs/steps.ts">StepListResponse</a></code>

Methods:

- <code title="get /threads/{thread_id}/runs/{run_id}/steps/{step_id}">client.threads.runs.steps.<a href="./src/resources/threads/runs/steps.ts">retrieve</a>(threadId, runId, stepId) -> StepRetrieveResponse</code>
- <code title="get /threads/{thread_id}/runs/{run_id}/steps">client.threads.runs.steps.<a href="./src/resources/threads/runs/steps.ts">list</a>(threadId, runId, { ...params }) -> StepListResponse</code>
