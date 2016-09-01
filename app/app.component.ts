import { Component } from '@angular/core';

@Component({
    selector: 'async-example',
    template: `<div>
    	<p>Today is {{today | date}}</p>
    	<p>Or if you prefer, {{today | date:'fullDate'}}</p>
    	<p>The time is {{today | date:'jmZ'}}<p>
    	<div>
    `
})
export class AppComponent { 
	today: number = Date.now();

}
