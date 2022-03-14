import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { pipe } from 'rxjs';
import { MemeService } from '../common/meme.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent implements OnInit {

  memes: { id: number; name: string; url: string; width: number; height: number; box_count: number; }[] = [];
  constructor(private dom: DomSanitizer,
    private memeService: MemeService) { }

 

  ngOnInit(): void {
    this.memeService.memes.subscribe(data => {
      this.memes = data;
    })
   }

   trustImage(item: string) {
    return this.dom.bypassSecurityTrustStyle(item);
}

}
