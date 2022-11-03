import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css']
})
export class CardsViewComponent implements OnInit {

  cards = [
    'background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;background-blend-mode: multiply,multiply;',
    'background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);',
    // 'background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);',
    'background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);',
    'background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);',
    'background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);'
  ];
  something = false;

  constructor() { }

  ngOnInit(): void {
  }

}
