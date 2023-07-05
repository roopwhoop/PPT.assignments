Writing semantic code should be every web developer's goal. With the addition of dozens of new HTML5 tags, it can suddenly be confusing as to which tags you should use, especially since you might have originally learned a different way. The difference between image and figure tags in HTML5 is quite simple. The first thing to understand is that they're not interchangeable. Image tags are still absolutely necessary in HTML, the figure tag is really just a different way to organize your content. Before HTML5 there wasn't a way to add a caption to an image semantically through HTML. If you wanted to add a caption you'd have to add a paragraph with a class or something similar. In HTML5 a <figure> element was added. According to the W3C Specification, the figure element has an optional caption and is a single unit outside the main flow of the document and can be removed without changing the document's meaning. Figure caption, <figcaption>, is a caption or legend for a figure. The <figcaption> is not necessary, and it can be before, after, or within the <figure>. However,  there can only be one <figcaption> nested within a <figure>. An <img> is something that goes inside of a <figure>. You can also use <figure> with blocks of code, audio, video, tables, etc. There are some exceptions. Graphics that are just graphics should still be listed as <img>. The reason regular graphics deserve different treatment is because they're not necessary to the content on the page. If someone can't see the graphic, they'd still get a clear message from your site. If this seems a little confusing, you can think of <figure> as a semantic way of grouping all things you'll need for an image together. Instead of nesting an image and a caption you've put in a <p> within a <div> with a class of "image" or something similar, you can group all image like things together inside of a <figure>. For example:
Tea cup with steam and pen on bed
Journaling with Tea
<figure>
  <img src="tea.jpg" alt="Tea cup with steam and pen on bed">
  <figcaption>Journaling with Tea</figcaption>
</figure>
Doesn't the above code look more semantic than this:
<div class="image">
  <img src="tea.jpg" alt="Tea cup with steam and pen on bed">
  <p>Journaling with Tea</p>
</div>
You might wonder if you should being using <aside> instead of <figure>. There's a super simple way to check which you should use. Use <aside> if the content is only related to your main content, but not essential. Use <figure> if the content is essential, but it's exact position on the page is important.   Using the new HTML5 tags to specify exactly what your content is helps out screen readers, and therefore is much better for accessibility. The old and outdated way is to have "div soup" in your markup. Take a step back and do some research into HTML5 tags, and browser compatibility, and see if you can replace your divs with something more semantic.