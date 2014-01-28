![General Assembly](../assets/images/ga.png)
# FEWD LESSON 4

## FEWD - Layout

### Instructors
Kit Yuen & Mart van de Ven 



## Agenda

* Box Model Hack
* Advanced CSS Selectors
* CSS Specificity
* Floats
* HTML5 Structural Elements
* Lab Time



## Box Model Hack
<aside class="notes">Kit ~ 10 min</aside>

```
/* Box Model Hack */
* {
     -moz-box-sizing: border-box; /* Firexfox */
     -webkit-box-sizing: border-box; /* Safari/Chrome/iOS/Android */
     box-sizing: border-box; /* IE */
}
```



## Advanced CSS Selector
<aside class="notes">Kit ~ 15 min</aside>

[The 30 CSS Selectors you Must Memorize](http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/)



## CSS Specificity
<aside class="notes">Mart ~ 15 min</aside>

[Specifics on CSS Specificity](http://css-tricks.com/specifics-on-css-specificity/)



## Floats
<aside class="notes">Kit ~ 20 min</aside>

Float is a CSS positioning property, used to layout a web page. 
![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)



## Floats
<aside class="notes"></aside>

Float can also help you to create an horizontal menu.
![](http://line25.com/wp-content/uploads/2012/css-menu/3.jpg)



## HTML5 Structural Elements
<aside class="notes">Mart ~ 10 mins</aside>

* ```<header>```
* ```<aside>```
* ```<footer>```



## Code Along
<aside class="notes">
  Both ~ 60 mins
    * HTML: header, aside, footer
    * CSS: float 
</aside>

### Floating Sections
![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## The clearfix hack
<aside class="notes"></aside>

Apply the clearfix class to the parent element such that it knows the height of the floating children.

```
/* Clear fix hack */
.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
```



## Homework
<aside class="notes">Both ~ 10 + 45 min</aside>

### How to get started with a project?

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)
### Fashion Blog Part 2

### Reading

* [All about Floats](http://css-tricks.com/all-about-floats/)
* [Floats: Things you should know](http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/)