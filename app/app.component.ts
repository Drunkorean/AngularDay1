import { Component } from '@angular/core';

@Component({
    selector: 'async-example',
    template: `<div>
    	<p>Wait for it... {{ greeting | async }}</p>
    	<button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    	</div>`
})
export class AppComponent { 
	greeting: Promise<string> = null;
	arrived: boolean = false;

	private resolve: Function = null;

	constructor() { this.reset(); }

	reset() {
		this.arrived = false;
		this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
	}

	clicked() {
		if (this.arrived) {
			this.reset();
		} else {
			this.resolve('hi there!');
			this.arrived = true;
		}
	}




}
