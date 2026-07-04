
Events in Javascript act actions that happen in the browser. These events are actions which tells browser to inform us so that our code can respond to that. 
We use and poll to events using `.addEventListener()`  
Example Usage: 
```javascript
document.getElementById("Hello").addEventListener('click',()=>{},false)
```

### Parameters

- **Event Type**:
  It is string name of the specific event. 
  
- **(event)=>{}**: 
  It is the function which contains the code we want to run on listening the event. When the event is fired, the browser creates and event object about that specific event and send it as a first argument to the function. Event object is unique with the type of events. 
  
- **boolean**:
  This is the Event propagation flag. By default it is set to `false`.
  There are two types of Event propagation: 
	- **Bubbling (`false`)** : It triggers from the innermost element to the parent. (down to up)
	- **Capturing (`true`)**: It triggers from the outermost element to inner childs (up to down)
	In order to stop propagation (so that it cannot bubble up) we use `event.stopPropogation()` inside the function. 
  

# Types of Event Listener

There are hundred of event listeners in Javascript. But the most common types of event listeners are : 
### Mouse Events
- `click`
- `dblclick`
- `mouseenter`
- `mouseleave`
- `mousemove`

### Keyboard Events
- `keydown`
- `keyup`

### Window Events
- `DOMContentLoaded`
- `resize`
- `scroll`
- `load` => Fires when HTML , scripts, sheets, images all are loaded

# Form Events
- `submit`
- `input`=>Fires synchronously every time the value of an `<input>`, `<textarea>`, or `<select>` changes.
- `change`=> Fires when element get focus, clicking into a text box. 

# Event Properties
- `e.defaultPrevented` => boolean property. returns true if `preventDefault()`  has called before. 
- `e.stopPropagation()`
- `e.preventDefault()` 
- `e.stopImmediatePropagation()`
- `e.target` 
	- `e.target.parentNode` => Parent Node of Target 
	- `e.target.parentElement`
	- `e.target.id`
	- `e.target.value`
	- `e.target.tagName`
- `(e.clientX,e.clientY)` => distance of mouse pointer to the top-left edge of visible browser. Ignore scroll.
- `(e.pageX,e.pageY)`=>distance of mouse pointer to the top-left edge of entire HTML document. consider scroll. 
Other Properties can be determined through console. 


