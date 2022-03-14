import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { MemeResponse } from './model/meme-response';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  memes:BehaviorSubject<{
    id: number,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number
}[]> = new BehaviorSubject<{
  id: number,
  name: string,
  url: string,
  width: number,
  height: number,
  box_count: number
}[]>([]);
  constructor(private httpClient: HttpClient){  }

  getMemes(){
    return this.httpClient.get<MemeResponse>("/api/v1/all-memes").
    pipe(map(response => response));
  }
}
