import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect pipe

  public name: string = 'Eduardo';
  public gender: 'male' | 'female' = 'male';

  InvitationMap = {
      male : 'invitarlo',
      female : 'invitarla'
  }

ChangePerson() {
  this.name = 'Ivanna';
  this.gender = 'female';
}

//i18nPlural pipe
public clients: string[] = ['maria', 'pedro', 'eduardo', 'daftne', 'alan', 'nacho', 'jose'];
public clientsMap = {
  '=0' : 'no tenemos clientes esperando.',
  '=1' : 'tenemos 1 cliente esperando.',
  'other' : 'tenemos # clientes esperando.'
}

DeleteClient(){
  this.clients.shift();
}

// Keyvalue pipe
public person = {
  name: 'eduardo',
  age: 17,
  adrres: 'a un lado del aeropuerto'
}

//Async pipe
public myObservablTimer = interval(2000).pipe(
  tap(value => console.log('tap:', value)
  )
);


}
