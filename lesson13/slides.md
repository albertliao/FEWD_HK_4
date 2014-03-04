![General Assembly](../assets/images/ga.png)
# FEWD LESSON 13

## FEWD - Responsive Basics

### Instructors
Kit Yuen & Mart van de Ven



## Agenda
<aside class="notes"></aside>

* HTML and CSS Review
* Responsive Layouts
* Size units in HTML and CSS
* Media Queries



## HTML and CSS Review
<aside class="notes"></aside>

Let's bring HTML/CSS back into the equation.



## HTML and CSS Review
<aside class="notes">Kit (30 mins)</aside>

Use boxing.css to create the layout as shown in Boxes.png.

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)



## HTML and CSS Review
<aside class="notes">Kit (30 mins)</aside>

Comment boxing.css and uncomment the boxing-mobile.css. Use it to create the layout as shown in Mobile_Boxes.png.

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)



## Fixed Layout VS Responsive Layout
<aside class="notes">Kit (10 mins)</aside>



## Fixed Layout
<aside class="notes"></aside>

* Used up to this point
* Relies on a container of fixed width
* Usually 960px or 980px



## Fixed Layout
<aside class="notes"></aside>

Checkout these __Fixed__ sites

* [UPS.com](http://www.ups.com)
* [Google.com](http://www.google.com)
* [Getaround.com](http://www.getaround.com)



## Responsive Layout
<aside class="notes"></aside>

* Different styles for different screen widths
* Uses an elastic/fluid layout
* Fluid
* Sized in percentages
* Elastic
* Sized in ems



## Responsive Layout
<aside class="notes"></aside>

Checkout these __Responsive__ Sites

* [Generalassemb.ly](http://www.generalassemb.ly)
* [Dwolla.com](http://www.dwolla.com)
* [Sweethatclub.com](http://www.sweethatclub.com)
* [Relayrides.com](http://www.relayrides.com)



## Size units in HTML and CSS
<aside class="notes">Kit (30 mins)</aside>

Size unit in HTML [w3schools](http://www.w3schools.com/cssref/css_units.asp)

* px
* em
* rem
* %
* ...



## Size units in HTML and CSS
<aside class="notes"></aside>

__em__

* Relative unit just like %
* Size based on parent
* If parent font-size is 16px
  * 1em = 16px
  * 2em = 32px
  * 3em = 48px
* The final value is calculated by the product of all the parents' font-size.



## px VS em
<aside class="notes"></aside>

```
<div id="em">
  <p class="one">1 em</p>
  <p class="two">2 em</p>
  <p class="three">3 em</p>
</div>

<div id="px">
  <p class="ten">10 px</p>
  <p class="twenty">20 px</p>
  <p class="thirty">30 px</p>
</div>
```

```
#em { font-size: 10px; }
#em .one   { font-size: 1em; }
#em .two   { font-size: 2em; }
#em .three { font-size: 3em; }

#px { font-size: 10px; }
#px .ten    { font-size: 10px; }
#px .twenty { font-size: 20px; }
#px .thirty { font-size: 30px; }
```



## em VS rems
<aside class="notes"></aside>

__rem__

* Stands for _Root em_
* __Only__ refer to the font-size of the `<html>` tag

* [FONT SIZING WITH REM (px VS em VS rem)](http://snook.ca/archives/html_and_css/font-size-with-rem)



## The magic 62.5%
<aside class="notes"></aside>

If the base font-size is 62.5%, then ...

  * 1em   = 10px
  * 1.3em = 13px
  * ...

__em__ and __px__ would be in 1 : 10 ratio.



## Media Queries
<aside class="notes">Mart (40 Min)</aside>

```bash
media_query_list: <media_query> [, <media_query> ]*
media_query: [[only | not]? <media_type> [ and <expression> ]*]
  | <expression> [ and <expression> ]*
expression: ( <media_feature> [: <value>]? )
media_type: all | aural | braille | handheld | print |
  projection | screen | tty | tv | embossed
media_feature: width | min-width | max-width
  | height | min-height | max-height
  | device-width | min-device-width | max-device-width
  | device-height | min-device-height | max-device-height
  | aspect-ratio | min-aspect-ratio | max-aspect-ratio
  | device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
  | color | min-color | max-color
  | color-index | min-color-index | max-color-index
  | monochrome | min-monochrome | max-monochrome
  | resolution | min-resolution | max-resolution
  | scan | grid
```



## Media Queries
<aside class="notes"></aside>

Don't worry

```
@media only screen
and (max-width: xPx)
and (min-width: xPx)
and (max-device-width:xPx)
and (min-device-width:xPx)
and (orientation: portrait)
and (orientation: landscape)
```

Separate multiple clauses with "and"



## Mobile Display
<aside class="notes"></aside>

Add the following meta tag.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

And here are some media queries for standard devices.
[Media Queries for Standard Devices](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/)



## Example
<aside class="notes"></aside>

```
/* float boxes into columns */
.box{
  float: left;
}
@media only screen and (max-width:768px){
  .box{
    float: none;
  }
}
```



## Apply the media query to the Boxes exercise.
<aside class="notes">Mart (30 mins)</aside>

Uncomment and complete the boxing-media-query.css by referring to what you have written previously.

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)



## Homework
<aside class="notes">
  This is the lab in the next lesson. We can introduce it if we have time.
  Other we could take the remaining time for the Advanced JS in the Memory game exercise.
</aside>

Startup Matchmaker Responsive

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)