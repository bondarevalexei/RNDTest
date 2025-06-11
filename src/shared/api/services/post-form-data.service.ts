import { Injectable } from '@angular/core';
import { PostFormData } from '../../types/PostFormData';

// in feature this service will post data via httpClient or other
@Injectable({
  providedIn: 'root',
})
export class PostFormDataService {
  constructor() {}

  public postData(data: PostFormData): void {
    console.log(data);
  }
}
