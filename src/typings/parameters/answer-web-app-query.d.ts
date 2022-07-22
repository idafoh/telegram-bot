import type { InlineQueryResult } from '../index.js';

export interface AnswerWebAppQueryParams {
  /**
   * Unique identifier for the query to be answered
   */
  web_app_query_id: string;
  /**
   * An object describing the message to be sent
   */
  result: InlineQueryResult;
}
