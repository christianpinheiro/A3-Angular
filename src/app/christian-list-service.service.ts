import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {

  created: {
    rate_float: number;
  };
  d1: {
    updated: string;
  };
  d2: {
    updated: string;
  };
}

@Injectable()
export class ChristianListServiceService {
  current: Response;
  list: Array<Response> = [];

  constructor(private http: HttpClient) {}
}
