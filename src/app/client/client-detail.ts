import {Client} from './client';
import { Book } from '../book/book';

export class ClientDetail extends Client {
  books : Book[];
}