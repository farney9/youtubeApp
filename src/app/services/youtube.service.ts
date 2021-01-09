import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {


  private youTubeUrl    = 'https://www.googleapis.com/youtube/v3';
  private apiKey        = 'AIzaSyAMujXEe7os3YAqy17zUuqOqNhu0BYff1U';
  private playList      = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private http: HttpClientModule) { 

    
  }
}
