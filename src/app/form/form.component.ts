import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  title: string = 'template driven form';

  loginUser(item: any) {
    console.log(item);
  }
}
