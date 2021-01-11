import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { YoutubeResponse } from '../models/youtube.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {


  private youTubeUrl    = 'https://www.googleapis.com/youtube/v3';
  private apiKey        = 'AIzaSyAMujXEe7os3YAqy17zUuqOqNhu0BYff1U';
  private playList      = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private http: HttpClient) { 

  }


  getVideos(){
    
    const url =`${this.youTubeUrl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playList)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken)
      
    return this.http.get<YoutubeResponse>(url, {params} )
              .pipe(
                map( resp => {
                  this.nextPageToken = resp.nextPageToken;
                  return resp.items;
                }),
                map(items => { 
                  return items.map( video => video.snippet)
                })
              );
  }
}
