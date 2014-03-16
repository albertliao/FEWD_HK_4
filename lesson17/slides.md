![General Assembly](../assets/images/ga.png)
# FEWD LESSON 17

## FEWD - Facebook and Google API

### Instructors
Kit Yuen & Mart van de Ven



## Agenda
<aside class="notes"></aside>

* Javascript Object
* Scalable and Modular Architecture for CSS
* Javascript: __data-__
* MapBox
* Google Map API
* Facebook Integration : Authentication
* Facebook Integration : API Calls



## Javascript Object
<aside class="notes">Mart (?? Min)</aside>

### The Greatest Container of them All

* Object Oriented Programming VS Procedural Programming
* An object stores its own values (states)
* An object can also has behaviours (method/function)



## Javascript Object
<aside class="notes"></aside>

**Definition of Object**

* An `object` in CompSci is a collection of data and functions that work with that data.
* Objects allow us to organize similar data effectively.



## Javascript Object
<aside class="notes"></aside>

**Example of an object**

* Person
  * Has a name, age, location
  * Can speak, eat
* Lightbulb
  * Number of watts, brand
  * Can turn on and off



## Javascript Object
<aside class="notes"></aside>

**Syntax**

Empty object = {}

```
var obj = {};
```

Person Object

```
var person = {
  age: 28,
  name: "Mart van de Ven"
};
```



## Javascript Object
<aside class="notes"></aside>

**Key-Value pairs**

```
var person = {
  age: 28,
  name: "Mart van de Ven",
  key1: value1,
  key2: value2,
  ...
  keyX: valueX // No comma for the last pair
};
```

* Objects start and end with { } brackets
* The key is a unique name similar to a variable name.
* The value can be anything! String, number, boolean.. even function or another object!
* The last value should have no comma in the end



## Javascript Object
<aside class="notes"></aside>

**Accessing the object value by index method**

Creating

```
var test = {a: "hi"};
```

Accessing

```
test["a"]; // returns "hi"
```

Assigning

```
test["a"] = "bye"; // test["a"] now stores “bye”
```



## Javascript Object
<aside class="notes"></aside>

**Accessing the object value by dot method**

Creating

```
var test = {a: "hi"};
```

Accessing

```
test.a; // returns “hi”
```

Assigning

```
test.a = "bye"; // test["a"] now stores “bye”
```



## Javascript Object
<aside class="notes"></aside>

**Car example**

```
var car = {
  make: "Ford",
  model: "Focus",
  year: 2013,
  mileage: 89000
}
```



## JSON: Javascript object in string
<aside class="notes"></aside>

* JavaScript Object Notation
* Way of representing objects we create as "Strings"
* Safe way of saving objects, and passing them between places
* Facebook and Twitter use JSON to pass data around
* When you tweet, JSON is sent to the twitter servers



## JSON: Javascript object in string
<aside class="notes"></aside>

**Syntax**

```
// Normal object
{name: "Mart van de Ven"}

// JSON
{"name": "Mart van de Ven"}
```

Wrap the key as string!



## JSON: Javascript object in string
<aside class="notes"></aside>

**Conversion between JSON and Object**

```
// turns objects into JSON strings
JSON.stringify(obj);

// turns JSON strings into objects
JSON.parse(string);
```



## Scalable and Modular Architecture for CSS
<aside class="notes">Mart - 15 Min</aside>

**CSS is simple... It’s simple to understand. But CSS is not simple to use or maintain.**

- Repetition
- Unmanagaeble
- Weight war
- Coupling

[SMACSS](http://smacss.com/) is more style guide than rigid framework - an attempt to document a consistent approach to site development when using CSS.



## SMACSS
<aside class="notes"></aside>

The basic concept of SMACSS is to categorize styles into 5 categories: 

- base, 
- layout, 
- modules,
- states, and
- themes.

Each category comes with a set of more ore less loosely defined naming conventions and usage rules.



## SMACSS : Base
<aside class="notes"></aside>

### Base rules are the defaults.

They are almost exclusively single element selectors.

```
body, form {
  margin: 0;
  padding: 0;
}

a {
  color: #039;
}

a:hover {
  color: #03F;    
}
```



## SMACSS : Layout
<aside class="notes"></aside>

### Layout rules divide the page into sections. 

Layouts hold one or more modules together. 

```
#article { /* Basic layout rule */
    width: 80%;
    float: left;
}

#sidebar {
    width: 20%;
    float: right;
}

.l-fixed #article { /* A highe level layout may help too */
    width: 600px;
}

.l-fixed #sidebar {
    width: 200px;
}
```



## SMACSS : Modules
<aside class="notes"></aside>

### Modules are the reusable, modular parts of our design. 

They are the callouts, the sidebar sections, the product lists and so on.
Better use class instead of ID.

```
<!-- This could be regarded as a module in HTML -->
<div class="fld">
  <span class="fld-name">Folder Name</span> 
  <span class="fld-items">(32 items)</span>
</div>
```




## SMACSS : Modules
<aside class="notes"></aside>

### Make use of of sub class

```
<!-- This could be regarded as a module in HTML -->
<div class="fld fld-system">
  <span class="fld-name">Folder Name</span> 
  <span class="fld-items">(32 items)</span>
</div>

<div class="fld fld-personal">
  <span class="fld-name">Folder Name</span> 
  <span class="fld-items">(32 items)</span>
</div>
```



## SMACSS : States
<aside class="notes"></aside>

### State rules are ways to describe how our modules or layouts will look when in a particular state.

Is it hidden or expanded?

```
.tab {
    background-color: purple;
    color: white;
}

.is-tab-active {
    background-color: white;
    color: black;
}
```



## SMACSS : Themes
<aside class="notes"></aside>

### Theme rules describe how the layout or modules might look.

```
// in module-name.css
.mod {
    border: 1px solid;
}

// in module-name-theme-A.css
.mod {
    border-color: blue;
}
```



## SMACSS : Avoid IDs
<aside class="notes"></aside>

### Use classes rather than IDs for styling purposes. 

Classes are more flexible. Using classes can reduce specificity issues.



## SMACSS : Pattern
<aside class="notes"></aside>

### Class names should follow understandable patterns.



## SMACSS : Prefixes
<aside class="notes"></aside>

### Use “pseudo-namespaces” as prefixes

So that modules, modifiers and sub-modules can be identified.



## SMACSS with SASS
<aside class="notes"></aside>

Extending modules with sub-modules made easy.
```
.dialog
  width: 300px
  color: blue

.dialog-wide
  @extend .dialog
  width: 600px
```



## When to use data-
<aside class="notes">Kit - 3 Min</aside>

" Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements. "
~ W3C Specification

* To store the initial height or opacity of an element which might be required in later JavaScript animation calculations
* To store custom web analytics tagging data
* To store data about the health, ammo, or lives of an element in a JavaScript 
* We can set and retrieve these __data-__ attributes using __.data()__ in jQuery



## MapBox
<aside class="notes">Kit - 20 Min</aside>

[Create your own map style @ MapBox](http://www.mapbox.com/)



## Google Map API
<aside class="notes">Kit - 10 Min</aside>

[Google Maps JavaScript API v3](https://developers.google.com/maps/documentation/javascript/tutorial?hl=en-us)



## Facebook Integration : Authentication
<aside class="notes">Kit - 40 Min</aside>

[Getting Started with Facebook Login for Web](https://developers.facebook.com/docs/facebook-login/getting-started-web/)



## Facebook Integration : API Calls
<aside class="notes"></aside>

[Facebook SDK for JavaScript](https://developers.facebook.com/docs/javascript/gettingstarted/)

[Getting Started: The Graph API](https://developers.facebook.com/docs/getting-started/graphapi/)

[Create a Facebook App](https://developers.facebook.com/docs/opengraph/getting-started/#create-app)



## Final Projects, Final Chance
<aside class="notes">Mart - 40 Min</aside>

**Let's squash some bugs!**