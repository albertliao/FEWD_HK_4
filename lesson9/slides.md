![General Assembly](../assets/images/ga.png)
# FEWD LESSON 9

## FEWD - jQuery

### Instructors
Kit Yuen & Mart van de Ven



## Agenda
<aside class="notes"></aside>

* jQuery



## jQuery __is__ JavaScript
<aside class="notes">30 Min</aside>



## jQuery
<aside class="notes"></aside>

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.



## jQuery
<aside class="notes"></aside>

* jquery.com - A JavaScript library that makes DOM manipulation simple.
* Cross browser - works the same in all* browsers. 
* Allows:
  * Document traversal
  * CSS Manipulation
  * Event Handling
  * Animation
  * and more!



## Adding jQuery to your website
<aside class="notes"></aside>

Host your the JS file on your server

_&lt;script src="js/jquery-1.8.3.min.js"&gt;&lt;/script&gt;_

<br>

__OR__

<br>

Use the Google CDN

_&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"&gt;&lt;/script&gt;_



## jQuery
<aside class="notes"></aside>

###$

The Dollar Sign



## jQuery
<aside class="notes"></aside>

Selectors are just like CSS

```$(".class").click();```



## jQuery
<aside class="notes"></aside>

Finding elements on a page, use selectors with the $ function:

```
$("#searchBox")

$(".errors")

$("p")
```

Returns HTML elements you have selected.



## `<head>` or `<body>`?
<aside class="notes"></aside>

* Putting it in `<head>`, need to wait for the .js to be completely loaded before the `<body>` is rendered.
* Putting just before the `</body>` can increase page load speed
* You can also consider making use of CDN like Google CDN



## $(document).ready();
<aside class="notes"></aside>

If you want to place the .js file inside the `<head>`, you need put your code inside
```$(document).ready();```

So your code will run after the DOM sis completely loaded and you can select any tags in the `<body>` with any problem.



## jQuery API Documentation
<aside class="notes"></aside>

Everything you need to know is [here](http://api.jquery.com/): 

Example:
* [.attr()](http://api.jquery.com/attr/)
* [.css()](http://api.jquery.com/css/)



## Rewrite Color Switcher
<aside class="notes">Class ~ 60 Min</aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

[Color Switcher in Javascript](http://codepen.io/nevan/pen/kBItz)

[Color Switcher in jQuery](http://codepen.io/nevan/pen/dmklG)



## Divided Times
<aside class="notes">Class ~ 90 Min</aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

Play with the following functions before u start:
* [.toggleClass()](http://api.jquery.com/toggleClass/)
* [.hasClass()](http://api.jquery.com/hasClass/)
* [.hide()](http://api.jquery.com/hide/)
* [.show()](http://api.jquery.com/show/)

And also:
* [.slideUp()](http://api.jquery.com/slideUp/)
* [.siblings()](http://api.jquery.com/siblings/)
* [.removeClass()](http://api.jquery.com/removeClass/)
* [.addClass()](http://api.jquery.com/addClass/)