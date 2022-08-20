#1. Main Functionality of the Browser

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

The way the browser interprets and displays HTML files is specified in the HTML and CSS specifications. These specifications are maintained by the W3C (World Wide Web Consortium) organization, which is the standards organization for the web. For years browsers conformed to only a part of the specifications and developed their own extensions. That caused serious compatibility issues for web authors. Today most of the browsers more or less conform to the specifications.

#2. High Level Components of a browser

###a. The user interface:
This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

###b. The browser engine:
Marshals actions between the UI and the rendering engine.

###c. The rendering engine:
Responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

###d. Networking:
Network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

###e. UI backend:
Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

###f. JavaScript interpreter:
Used to parse and execute JavaScript code

###e. Data storage:
This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![Getting Started](./Browser%20components.png)

#3. Rendering engine and its Uses

Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins. 

![Getting Started](./Flow%20of%20rendering%20enginee.png)

#4. Parsers

A HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

Now we know, html tag starts at the top and then the head tag starts before the html ends so we can figure out that the head is inside html and create a tree out of it. Thus we then get something called a parse tree which eventually becomes a DOM tree.


#5. Script Processors

The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn’t provide the functionality you need to filter events.

#6. Tree construction

HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

Now we know, html tag starts at the top and then the head tag starts before the html ends so we can figure out that the head is inside html and create a tree out of it. Thus we then get something called a parse tree which eventually becomes a DOM tree.

The first step is for the browser to combine the DOM and CSSOM into a “render tree” that captures all the visible DOM content on the page, plus all the CSSOM style information for each node.

![Getting Started](Tree%20construction.png)

To construct the render tree, the browser roughly does the following:

Starting at the root of the DOM tree, traverse each visible node.
Some nodes are not visible at all (e.g. script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.
Some nodes are hidden via CSS and are also omitted from the render tree - e.g. the span node in example above is missing from the render tree because we have an explicit rule that sets “display: none” property on it.
For each visible node find the appropriate matching CSSOM rules and apply them.
Emit visible nodes with content and their computed styles.


#7. Order of script processing

A srcipt in the middle of the HTML, The parser will halt there, will fetch the script, wait for the response, execute it and then it will continue the parsing. This is why we put scipt tag at the end of the body so that we can complete the parsing first.

A similar thing happens when we put link tag The parser fetches the CSS and makes sure that the CSSOM is ready before putting content on the screen. This is why we don't see a flash of CSSless content before the page load instead we see the content with its CSS loaded and applied.

Even though I said that the parsing halts when it comes across link and script tags there are ways to avoid that using async and defer on the script tag and preload on link We'll see that in details in the next part of this series.

#8. Layout and Painting

###a.Layout:
The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc) from The Render Tree and places the elements on the screen.

###b. Painting:
After Layout, a Paint happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors.

After the paint, we see the content on the screen and the first time we see something other than a white screen is called 'First Paint'. The term First Paint is used in performance reports to show how long your website took to show something on the screen.