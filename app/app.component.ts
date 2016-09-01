import { Component } from '@angular/core';

@Component({
    selector: 'async-example',
    template: `<div>
    	<p>Without JSON pipe:</p>
    	<pre>{{object}}</pre>
    	<p>With JSON pipe:</p>
    	<pre>{{object | json}}</pre>


    	<div>
    `
})
export class AppComponent { 
	object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

}
