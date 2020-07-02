import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*Apart from templateUrl we can use template */
  // template:`
  //  <div class="container">
  //   <div class="row">
  //     <div class="col-xs-12"> 
  //       <h3>This Is Using Template In Angular Project</h3>
  //     </div>
  //   </div>
  // </div>
  //`,
  styleUrls: ['./app.component.css']
  /*Apart from stylesUrls we can use styles property */
  // styles:[`
  //   h3{
  //     color:dodgerblue;
  //   }
  // `]

})
export class AppComponent {
  title = 'This Is Angular Application';
}
