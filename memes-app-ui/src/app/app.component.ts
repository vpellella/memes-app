import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemeResponse } from './common/model/meme-response';
import { MemeService } from './common/meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'memes-ui';
  showMemesPage: boolean = false;


  constructor(private memeService: MemeService) {}

  ngOnInit(): void {
    this.memeService.getMemes().subscribe(memesData => {
      if(memesData.success)
      {
        this.memeService.memes.next(memesData.data.memes);
        this.showMemesPage = (memesData.success =="true");
      }
    });

  }





}
