import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Edwin',
  gender: 'male',
  age: 27,
  addres: 'Bogota, Colombia',
};

const client2 = {
  name: 'Angela',
  gender: 'female',
  age: 28,
  addres: 'Toronto, Canadá',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }
}
