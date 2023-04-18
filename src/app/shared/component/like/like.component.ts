import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
 
   @Input() isliked!:boolean
   @Output() emitlikestatus:EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  onlikedislike(){
    this.isliked=!this.isliked
    this.emitlikestatus.emit(this.isliked)
  }

}
