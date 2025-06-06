import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

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
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
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

  // i18n Plural

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Juan',
    'Luis',
    'Carlos',
    'Andres',
    'Jorge',
  ]);

  deleteClient() {
    this.clients.update((clients) => clients.slice(1));
  }

  // KeyValue Pipe

  profile = {
    name: 'Edwin',
    age: 27,
    address: 'Bogota, Colombia',
  };

  // Asycn Pipe

  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta');
      console.log('Promesa finalizada');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Tap: ', value))
  );
}
