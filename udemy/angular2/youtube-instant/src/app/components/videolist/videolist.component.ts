import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from '../../video';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
})

export class VideolistComponent implements OnInit {
  videos: Video[];
  selectedVideo: Video;
  searchStr: string;

  constructor(private _videoService: VideoService) {

  }

  ngOnInit() {
    var url = window.location.hash.substring(1, window.location.hash.length);

    if(url.length) {
      this.searchStr = url
    }
    else {
      this.searchStr = "still alive mirror edge"
    }

    this.searchVideo();
    console.log();
  }

  searchVideo() {
    this._videoService.getVideos(this.searchStr)
      .subscribe(videos => {
        this.videos = [];
        for(var i=0; i<videos.items.length; i++) {
          this.videos.push({
            videoId: videos.items[i].id.videoId,
            title: videos.items[i].snippet.title,
            thumbnail: videos.items[i].snippet.thumbnails.default.url
          });
        }

        this.selectedVideo = this.videos[0];
        window.location.hash = this.selectedVideo.title;
      })
  }

  setVideo(video) {
    this.selectedVideo = video;
  }
}
