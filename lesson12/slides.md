![General Assembly](../assets/images/ga.png)
# FEWD LESSON 12

## FEWD - Review and Refactor

### Instructors
Kit Yuen & Mart van de Ven



## Agenda
<aside class="notes"></aside>

* Refactor
* The __this__ Keyword
* Debugging Techniques



## Refactor
<aside class="notes">(5 mins)</aside>

Making code more efficient without changing functionality.

* To reduce or eliminate redundancy
* Make code easier to read
* Make code more maintainable



## Let's refactor the code
<aside class="notes">(55 mins)</aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## CSS Refactor
<aside class="notes"></aside>

* Remove inline styling
* Replace repeated styles with classes
* Rename classes/ids for readability
* Organize CSS
* Group by section
* Order by precedence (tag selectors at top, id selectors at bottom)
* Create classes for large CSS changes in JS
* Remove unnecessary css



## JS Refactor
<aside class="notes"></aside>

* Use functions
* Use variables
* Use arrays
* Combine jQuery selectors
* Combine jQuery property changes into objects
  * .css,.attr,etc
* Chain jQuery function calls



## The __this__ Keyword
<aside class="notes">(10 mins)</aside>

jQuery: __this__ refers to the selected object



## The __this__ Keyword
<aside class="notes"></aside>

Example

How about this code?

```
$("p").on("click",function(e){
    $(this).fadeOut(500);
});
```

__Rule of thumb (ROT)__: If I don’t know what thing will be acted on, then I should consider using "this"



## Color Scheme
<aside class="notes">(30 mins)</aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)

Try to use the __this__ keyword.



## Debugging
<aside class="notes">(5 mins)</aside>

Why isn't this working?



## Debugging
<aside class="notes"></aside>

Always start be defining the problem. 

* _The image is not moving_
* _None of my code works_



## Debugging
<aside class="notes"></aside>

What are the first steps on your bug hunt?

* _Image not moving_
  * find the code that makes the image move

* _None of my code works_
  * Syntax error, check console



## Debug
<aside class="notes">(30 mins)</aside>

![GeneralAssemb.ly](../assets/images/icons/code_along.png)



## Debugging: Level __1__
<aside class="notes"></aside>

Check for errors (red text, aligned right) in console
To access debugging console
  
  * PC: CTRL+SHIFT+J
  * Mac: COMMAND+OPTION+J

Click the error

The location may not be correct but is a good place to start
Ex: Unbalanced brackets or parentheses



## Debugging: Level __2__
<aside class="notes"></aside>

So no red errors but not getting the right answer?
Try console.log

Ex: 

```
var stringOfNames=“”;
["Bob","Joe"].forEach(function(element){
  stringOfNames-=element + ",";
  console.log(stringOfNames);
});
```



## Debugging: Level __3__
<aside class="notes"></aside>

* Use the debugger in Chrome
* Set a breakpoint
* Run the code
* Step through the code until you get to the error
* Variable values display on the right
* You can switch to the console to run code or check value of variable



## Debugging: Level __4__
<aside class="notes"></aside>

Get help!

1. Try _Your preferred search engine_ search
1. Be ready to clearly articulate the problem (Write out what your problem is) 
1. If nothing, ask instructor



## Refactor
<aside class="notes">both (50 mins)</aside>

![GeneralAssemb.ly](../assets/images/icons/exercise_icon_md.png)

Continue your food voting lab / Introduce the memory game