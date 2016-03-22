---
layout: post
title: Introducing React Components
custom_js: TodoAppComponent
---

_This annoucement is here to demonstrate React Components directly used in Poole (or just Jekyll), no need for pre-rendering, all is done in the client side. Currently, it only works in post view, so click on the title of this article to see the live examples._

-----

Here's a simple React component, it's just a built-in component:

<div class="message">
  <script type="jsx">
    <b>A simple react element</b>
  </script>
</div>

And its code :

```yaml
<script type="jsx">
  <b>A simple react element</b>
</script>
```

But you can have something more elaborated like this:

<div class="message">
  <script type="jsx">
    <TodoAppComponent />
  </script>
</div>

```yaml
# _posts/YYYY-MM-DD-your-article.md
---
# include /javascripts/TodoAppComponent.js, you just have to drop it
custom_js: TodoAppComponent
---

# ...

<script type="jsx">
  <TodoAppComponent />
</script>
```

You can drop a component file into the javascripts folder and use it directly on an article by specifying it on the Jekyll front matter. You can use ES2015 too, Babel is already included with the react and es2015 presets.
