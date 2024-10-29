import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public menuitems : MenuItem[] = []

  ngOnInit(){
    this.menuitems = [
         {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-aling-left',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No Comunes',
            icom: 'pi pi-globe',
            routerLink: 'uncommon'
          }]
         },
         {
          label: 'Pipes Personalizados',
          icon: 'pi pi-cog',
          items: [{
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          } ]

         }

    ];
  }


}
