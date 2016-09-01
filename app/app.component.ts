import { Component } from '@angular/core';

@Component({
    selector: 'async-example',
    template: `<div>
    	<p>A: {{a | currency:'EUR':true}}</p>
    	<p>B: {{b | currency:'USD':true:'4.2-2'}}</p>
    </div>	
    `
})
export class AppComponent { 
	a: number = 0.259;
	b: number = 1.3495;

}
