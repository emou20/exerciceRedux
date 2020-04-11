import { ADD_ARTICLE } from "../constants/action-types";

export function addPost(TitleArticle) {
    return { type: ADD_ARTICLE, TitleArticle }
  };