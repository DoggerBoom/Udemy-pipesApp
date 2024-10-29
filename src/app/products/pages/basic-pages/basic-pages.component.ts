import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})
export class BasicPagesComponent {

public nameLower = 'EDUARDO';
public nameUpper = 'eduardo';
public fullName = ' JesUS EduaRDo';

public customDate: Date = new Date();
}
