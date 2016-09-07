import { Component } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { NgSwitchDefault } from '@angular/common';

@Component({
    selector: 'async-example',
    template: `
    <div>
    	<p>A: {{a | percent}}</p>
    	<p>B: {{b | percent:'1.4-5'}}</p>
    </div>
  `
})
export class AppComponent { 
  a: number = 0.259;
  b: number = 1.3495;

}
