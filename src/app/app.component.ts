import { Component } from '@angular/core';
import { Ireels } from './shared/models/reels';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusableComponent';
 
  reels:Array<Ireels>=[
    {
      title:"lorem ipsum1",
      likecount:1234,
      islike:true,
      id:1,
      url:"https://picsum.photos/300/302"
    },
    {
      title:"lorem ipsum2",
      likecount:2234,
      islike:false,
      id:2,
      url:"https://picsum.photos/300/301"
    },
    {
      title:"lorem ipsum3",
      likecount:4234,
      islike:true,
      id:3,
      url:"https://picsum.photos/300/300"
    },
    {
      title:"lorem ipsum4",
      likecount:5234,
      islike:false,
      id:4,
      url: "https://picsum.photos/300/299"

    }
  ]

  getlikedstatus(eve:boolean,id:number){
    console.log(eve,id)
    this.reels.forEach(reel=>{
      if(reel.id === id){
        if(eve){
         reel.likecount++
        }else{
          reel.likecount--
        }
      }
    })

    
  }
 
}
