import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { YoutubeService } from 'src/app/services/youtube.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor( private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos(){
    this.youtubeService.getVideos()
    .subscribe( resp  => {
      this.videos.push( ...resp );
      console.log(this.videos);
    });  
  }

  verVideo( video: Video){
    // console.log(video);
    Swal.fire({
      title: `<strong>${video.title}</strong>`,
      html: `
          <div class="embed-responsive embed-responsive-16by9">
              <iframe
              width="100%" 
              height="315" 
              class="embed-responsive-item" 
              src='https://www.youtube.com/embed/${video.resourceId.videoId}' 
              allowfullscreen>
            </iframe>
          </div>
        `
    })
    
  }

}
