import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  /**
   * @ignore
   */
  uiExperienceYear: number;
  /**
   * @ignore
   */
  uiExperienceMonth: number;

  constructor() { }

  ngOnInit(): void {
    // total experience calculation
    let joiningDate: any = new Date('2014-02-23');
    let uiJoiningDate: any = new Date('2017-08-01');
    let currentDate: any = new Date();

    // ui exp calculation
    this.uiExperienceYear = currentDate.getFullYear() - uiJoiningDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    currentMonth += 1; // adding 1 since getMonth gives 0 as January

    let uiJoiningMonth = uiJoiningDate.getMonth();
    uiJoiningMonth += 1; // adding 1 since getMonth gives 0 as January

    if (currentMonth >= uiJoiningMonth) {
      this.uiExperienceMonth = currentMonth - uiJoiningMonth;
    } else {
      this.uiExperienceYear -= 1;
      let tempMonth = 12 - uiJoiningMonth;
      this.uiExperienceMonth = tempMonth + currentMonth;
    }
  }

}
