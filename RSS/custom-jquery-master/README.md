### Custom JQuery tests

Custom JQuery

Your task is to implement minimal version of JQuery using DOM API
Methods to implement:
* [addClass](http://api.jquery.com/addClass/)
* [append](http://api.jquery.com/append/)
* [html](https://api.jquery.com/html/)
* [attr](http://api.jquery.com/attr/)
* [children](http://api.jquery.com/children/)
* [css](http://api.jquery.com/css/)
* [data](http://api.jquery.com/data/)
* [on](http://api.jquery.com/on/)
* [one](http://api.jquery.com/one/)
* [each](https://api.jquery.com/each/)

### Additional requirements:
* chaining

### Example usage
```javascript

$('.my-class')
	.each(function (index) {
		$(this).html('<b>' + index + '</b>')
	})
	.append($('div'))
	.addClass('my-super-class')
	.css({
		backgroundColor: 'rebeccapurple'
	});

```
    
#### Install
```sh
git clone https://github.com/rolling-scopes-school/custom-jquery-tests.git
cd custom-jquery-tests
npm i
```

* open `config.json`
* add path to your folder
* make sure you provided `window.$` reference to your implementation of JQuery

#### Run
```sh
npm test
```
---

Feel free to fork and contribute new tests :smirk_cat:
