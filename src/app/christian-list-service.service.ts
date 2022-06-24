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

  update() {
    if (!this.current) {
      this.http
        .get<Response>(
          'https://archive.org/metadata/TheAdventuresOfTomSawyer_201303'
        )
        .subscribe((data) => {
          this.current = data;
          this.list.push(data);
        });
    }
  }
}
