
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
### Ans 1: 
To get element from our document we use getElementById. 
if want to get element from document by class then we use getElementByClassName.
if want to get element from document by id or class or anything first match then use quearyselector.
2. How do you **create and insert a new element into the DOM**?
const paragraph=document.creatElement("p")
paragraph.textContent="Hello"
div.append(paragraph)


3. What is **Event Bubbling** and how does it work?
Event Bubbling is a process where a event happend in  a child element then it also happend in parent and grandparent.

4. What is **Event Delegation** in JavaScript? Why is it useful?
EVent delegation means a event listener store in a parent elemen.afterthat handle child element.its possible for event bubbling and for performance and maintain its very usefull.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() method use for stop auto reloading and storPropagation() used for to stop Event Bubbling.





