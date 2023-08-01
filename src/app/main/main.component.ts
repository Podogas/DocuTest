import {IconName} from '@fortawesome/fontawesome-common-types';
import { Component } from '@angular/core';
import {fas} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  icon:IconName = 'retweet';
  iconsKeys = Object.keys(fas);
  iconsCount = this.iconsKeys.length;
  randomNumberBetween(min:number, max:number) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
  renderIcon(name:IconName){
    setTimeout(() => {
      this.icon = name;
    }, 3000)
  }
  changeIcon(){
    const randomIconIndex = this.randomNumberBetween(0,this.iconsCount)
    const randomIconName = this.iconsKeys[randomIconIndex];
    this.renderIcon(fas[randomIconName].iconName);
  }
    
}
