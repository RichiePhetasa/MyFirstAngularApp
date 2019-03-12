import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  contacts = [];
  constructor () {
    this.contacts = [
      {
        ID: 1,
        first_name: 'Richie',
        last_name: 'Phetasa',
        email: 'Richiep559@mail.fresnostate.edu'
      },
      {
        ID: 2,
        first_name: 'Joe',
        last_name: 'Biden',
        email: 'Richiep559@mail.fresnostate.edu'
      },
      {
        ID: 3,
        first_name: 'Mike',
        last_name: 'Tyson',
        email: 'Richiep559@mail.fresnostate.edu'
      }
    ]
  }
  delete(e) {
    console.log('from delete e: ' , e);
    this.contacts.splice(e, 1);
  }
  addRow() {
    this.contacts.unshift({

    });
  }
  save(row) {
    console.log('from save row:', row);
  }
}
