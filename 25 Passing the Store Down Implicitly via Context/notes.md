The *React.PropTypes* have been deprecated in recent React versions, so instead I imported a library in the HTML with :
```HTML
  <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
  ```
and then in the JavaScript the 4 lines:
```JavaScript
  store: React.PropTypes.object
```
became
```JavaScript
  store: PropTypes.object
```
