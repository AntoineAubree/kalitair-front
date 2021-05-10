import { Pagination } from './pagination';
export interface ForumObject<T> {

  pagination: Pagination ;
  pages: number[];
  items: T[];

}
