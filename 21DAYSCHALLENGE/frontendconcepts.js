// 1. Semantic HTML, Forms, Validation, Tables & Accessibility

// Q: What is Semantic HTML, and why is it preferred over using generic <div> or <span> elements?
// Semantic HTML introduces tags that carry intrinsic meaning about their content to both
//  the browser and assistive technologies (like screen readers), rather than just serving
// as visual wrappers.
// Key Elements: <header>, <main>, <article>, <section>, <nav>, <footer>, <aside>, <time>.
// Benefits:Accessibility (a11y): Screen readers use landmarks to let users jump straight
// to relevant sections.
// SEO: Search engine crawlers parse content hierarchy and intent more accurately.
// Maintainability & Readability: Developers can scan the document outline without deciphering
//  endless class names.

// Q: How do you build an accessible form with robust client-side validation?
// Accessible forms require clear programmatic associations and informative feedback
// loops:Label Association: Always connect form controls with <label> using the for attribute
//  matching the input’s id, or wrap the input inside the <label>.

// Built-in HTML5 Constraints: Utilize attributes like required, pattern, type="email", minlength,
//  maxlength, and min/max.Dynamic Feedback with ARIA:Pair error messages using aria-describedby="error-id".
// Indicate validation status dynamically with aria-invalid="true".
// Group related controls (e.g., radio buttons or checkboxes) inside <fieldset> with a descriptive <legend>
// .HTML<form novalidate>

//     <label for="user-email">Email Address</label>
//     <input
//         type="email"
//         id="user-email"
//         name="email"
//         required
//         aria-describedby="email-error"
//         aria-invalid="false"
//     />
//     <span id="email-error" role="alert" class="error-msg"></span>
// </form>
//  Q: What are the essential elements of an accessible HTML table?
// Tables should present tabular data clearly with explicit structural
// tags:<caption>: Provides an accessible title/summary of the table for screen reader users.
// <thead>, <tbody>, <tfoot>: Delineate table sections.
// <th> with scope: Use scope="col" or scope="row" so assistive technology can announce
// which header belongs to which data cell.HTML<table>
//         <caption>Quarterly Department Revenue (2025)</caption>
//         <thead>
//             <tr>
//                 <th scope="col">Department</th>
//                 <th scope="col">Q1</th>
//                 <th scope="col">Q2</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <th scope="row">Engineering</th>
//                 <td>$120,000</td>
//                 <td>$135,000</td>
//             </tr>
//         </tbody>
//     </table>


//  Q: What is the "First Rule of ARIA", and how do you ensure full keyboard accessibility?
//  First Rule of ARIA: Do not use ARIA if you can use a native HTML element or attribute with
// the semantics and behavior already built in. For example, use <button> instead of
//  <div role="button" tabindex="0">.
// Keyboard Accessibility Checklist:Tabbing Order: Use native focusable elements (<a>, <button>, <input>).
//  Never use positive tabindex (e.g., tabindex="2" disrupts natural DOM flow); use tabindex="0"
// to make a custom element focusable, and tabindex="-1" for programmatic focus via .focus().
// Keyboard Event Handlers: Ensure custom interactive elements respond to both Enter and Space.
// Focus Indicators: Never set outline: none without providing a distinct visual alternative
// (e.g., custom :focus-visible styles).


// 2. DOM, CSSOM, Critical Rendering Path & SEO Metadata

//Q: What is the fundamental difference between HTML and the DOM?
// HTML (HyperText Markup Language): The raw text document/string representation authored by the developer
//  or sent over the network.
// DOM (Document Object Model): An in-memory object-oriented tree representation of the HTML document
// created by the browser.The DOM fixes invalid syntax (e.g., unclosed tags).
// The DOM updates dynamically via JavaScript.
// The DOM does not include items stripped during parsing (like raw HTML comments, though comment
// nodes exist in the tree, they don't impact rendering).
//
// Q: Walk through the Critical Rendering Path (CRP) from network response to screen pixels.
// DOM Construction: Raw HTML bytes $\to$ Characters $\to$ Tokens $\to$ Nodes $\to$ DOM Tree.
// CSSOM Construction: Raw CSS bytes $\to$ Characters $\to$ Tokens $\to$ Nodes $\to$ CSSOM Tree
// (render-blocking).
// Render Tree: Combines DOM and CSSOM, ignoring elements that don't affect layout
// (e.g., <head>, elements with display: none).
//  Note: visibility: hidden is included in the Render Tree because it takes up layout space.
// Layout (Reflow): Computes exact geometry, screen coordinates, and bounding box dimensions
// of each visible node.Paint (Repaint): Converts vector boxes into actual colored pixels
//  across multiple compositing layers.
// Compositing: Combines layers in the GPU to display the final frame on screen.
//
//Q: What are Core Web Vitals, and how do Layout and Paint relate to Cumulative Layout Shift (CLS)?
// When CSS properties that change dimensions (like width, height, margin, top, or layout changes
// triggered by unsized images/fonts) are modified via JS or late network requests, the browser
// must rerun Layout $\to$ Paint $\to$ Composite.If content jumps unexpectedly after user interaction
// or during load, it spikes CLS. Animating GPU-composited properties like transform and opacity
// skips both Layout and Paint, avoiding layout shifts and ensuring smooth 60/120fps animations.
//

//Q: What SEO metadata is critical for technical site discovery and social sharing?
// Essential Crawling & Indexing Tags:<meta name="viewport" content="width=device-width, initial-scale=1.0">
//  (mobile responsiveness requirement).<title> (50–60 characters) and <meta name="description" content="...">
//  (150–160 characters).<link rel="canonical" href="..."> (prevents duplicate content penalties).
// <meta name="robots" content="index, follow">.
// Social Graph Tags:Open Graph (Facebook/LinkedIn): og:title, og:description, og:image, og:url, og:type.Twitter
//  Cards: twitter:card, twitter:title, twitter:description, twitter:image.
// Structured Data: JSON-LD (<script type="application/ld+json">) providing schema.org structured context
//  (articles, products, FAQ, breadcrumbs).
//


// 3. Script Loading (async vs defer) & Web Storage

// Q: Compare standard <script>, <script async>, and <script defer>.
// Attribute           HTML Parsing Interrupted?                                  Script Execution Timing                               Execution Order Guaranteed?
// <script>            Yes — parsing pauses during download and execution         Immediately upon fetch completion                     Yes (DOM order)
// <script async>      No during download, but pauses parsing while executing     Immediately as soon as downloaded (asynchronous)      No (first to download executes first)
// <script defer>      No — downloads in background alongside parser              After HTML parsing finishes, just before              Yes (strict DOM order)
//                                                                                DOMContentLoaded


// When to use defer: Core application code, UI frameworks, scripts dependent
//  on the full DOM or on other scripts.

// When to use async: Independent third-party scripts with zero dependencies
// (e.g., Google Analytics, tracking pixels, ads).


// Q: What are the differences between localStorage, sessionStorage, and Cookies?
// FeaturelocalStoragesessionStorageCookies (document.cookie)LifetimePersistent until explicitly
// cleared via JS or browser cache wipeCleared when the specific browser tab/window closesConfigurable
//  via Expires or Max-Age; session cookie if omittedCapacity~5MB to 10MB per origin~5MB
// per origin~4KB total per domainScope / AccessShared across all tabs/windows of the same
//  originScoped to the individual tab/window; duplicate tabs spawn separate sessionsShared across all
//  tabs/windows under the domainServer TransferNever sent automatically with HTTP requestsNever sent
// automatically with HTTP requestsSent automatically with every HTTP request matching domain/pathSecurity
// FlagsNone (vulnerable to XSS)None (vulnerable to XSS)Supports HttpOnly (blocks JS access) and Secure
//  (HTTPS only)
//

//Q: Why should you avoid storing JWTs or authentication tokens in localStorage?
// Any script running on the page—including third-party scripts, compromised CDN dependencies,
//  or npm supply chain packages—can access localStorage via JavaScript
// (window.localStorage.getItem(...)). If an attacker successfully injects an XSS payload,
//  they can extract the token.
// Best Practice: Store authentication tokens in an HttpOnly, Secure, SameSite=Strict/Lax cookie.
//  The browser automatically handles cookie transmission, and JavaScript cannot read HttpOnly cookies,
//  nullifying token theft via XSS.



// Fundamentals & Core Architecture
// 1. What is the difference between HTML and HTML5 ?
//   DOCTYPE : HTML5 uses a simplified declaration(< !DOCTYPE html >), whereas HTML 4.01
//   required long references to DTDs(Document Type Definitions).

//   Semantics: HTML5 introduced native structural tags(<header>, <nav>, <article>, <section>, <footer>, <aside>).

//   Media Support: Native <audio> and <video> tags replaced reliance on third-party plugins like Adobe Flash.

//   Storage: HTML5 provides client-side key-value storage (localStorage and sessionStorage)
//   and IndexedDB, moving beyond standard 4KB cookies.

//   APIs: HTML5 added APIs for Canvas, Web Workers, Geolocation, Drag and Drop, and WebSockets.



// 2. What does < !DOCTYPE html > actually do? What happens if you omit it ?
// The < !DOCTYPE html > declaration tells the browser which version of HTML the page is written
// in and ensures the page renders in Standards Mode.

// If omitted or mistyped, modern browsers switch to Quirks Mode(or Almost Standards Mode)
//  to maintain backward compatibility with legacy websites built in the late 1990s.In Quirks Mode:

// CSS box model emulation changes(in old IE quirks mode, width included padding and borders).

// Font sizes, table layout algorithms, and margin collapse rules deviate from W3C specifications.


// 3. Explain the standard DOM structure and execution flow.
// A minimal valid HTML5 document follows this hierarchy:

// < !DOCTYPE html >
//     <html lang="en">
//      <head>
//    <meta charset="UTF-8">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document Title</title>
//    </head>
//    <body>
//    <!-- Visible content here -->
//    </body>
//   </html>

// The browser parses bytes $\to$ characters $\to$ tokens $\to$ nodes $\to$ DOM(Document Object Model) tree.
// CSSOM(CSS Object Model) is built in parallel.
// DOM and CSSOM combine into the Render Tree, which undergoes Layout(calculating exact geometries)
// and Painting(rasterizing pixels onto the screen).

// 4. What is the difference between Semantic and Non - Semantic HTML ?
//   Semantic HTML uses elements that describe their meaning to both the browser and
//  the developer(e.g., <article>, <button>, <nav>, <form>).

//  Non-Semantic HTML uses generic containers with no intrinsic meaning about their contents (e.g., <div>, <span>).

//  Benefits of Semantic HTML:

//  Accessibility (a11y): Screen readers use semantic nodes to construct accessibility trees and landmark navigation.

//   SEO: Search engine crawlers parse page hierarchy and prioritize content within headers, articles, and main tags.

//   Maintainability: Code readability improves across development teams.



// Elements, Tags, & Attributes
//
// 5.What are the key differences between block, inline, and inline - block display modes ?
//
//  Property              Block(<div>, <p>, <h1>)                           Inline (<span>, <a>, <strong>)          Inline-Block (<img>, <button>, display: inline-block)
// Line Break             Starts on a new line;                              Flows along existing line content;      Flows along line content; does not force new line.
//                        forces subsequent elements to next line.           wraps when needed.

// Width / Height         Fills available parent width(100 % by default ).   Ignores explicit width and height.      Respects explicit width and height.
//                           Respects explicit width / height.               Size depends purely on content.

// Padding / Margin       Respects vertical and horizontal                  Horizontal padding / margin works.       Respects vertical and horizontal margins and padding completely without line breaks.
//                        margins and padding fully.                        Vertical padding / margin renders
//                                                                          visually but does not affect layout or
//                                                                          push adjacent lines.


// 6. What is the difference between script, script async, and script defer ?
//  By default, <script src="..."> halts HTML parsing while the file is downloaded and executed.
//  <script> (Default): Parser halts => downloads script => executes script immediately => HTML parsing resumes.
//  <script async>: Downloads the script asynchronously while HTML parsing continues.
// As soon as the download finishes, HTML parsing pauses while the script executes.
//  Execution order is non-deterministic (scripts run in whatever order they finish downloading).

// <script defer>: Downloads the script asynchronously while HTML parsing continues.
//  Execution is deferred until the HTML parser finishes constructing the initial DOM (just before DOMContentLoaded).
//  Execution order is guaranteed according to document order.
//

// 7. How do data-* attributes work, and how are they accessed?
// data-* attributes allow storing custom data directly on HTML elements without affecting rendering.

// Access via HTML:
<button id="cartBtn" data-item-id="4821" data-user-tier="gold">Add to Cart</button>

// Access via JavaScript:
const btn = document.getElementById('cartBtn');

// Dataset property uses camelCase conversion
console.log(btn.dataset.itemId);   // "4821"
console.log(btn.dataset.userTier); // "gold"

// Or using standard DOM methods
console.log(btn.getAttribute('data-item-id')); // "4821"

// CSS:
// button[data - user - tier= "gold"] {
//     border: 2px solid gold;
// }


// 8. What are Void(Self - Closing) Elements ?
// Void elements cannot have child nodes or closing tags.In HTML5, adding a trailing slash
// (e.g., <img />) is optional syntactic sugar; the browser parses < img ...> and < img ... /> identically.

// Common void elements: <img>, <br>, <hr>, <input>, <link>, <meta>, <source>, <area>, <base>, <col>, <embed>, <param>, <track>, <wbr>.


//     Media, Tables, & Forms
// 9. Responsive Images: When to use <img> with srcset vs. <picture>?
// Use <img> with srcset and sizes for Resolution Switching: When the image content is identical, but you need to serve different resolutions based on screen pixel density (DPR) or viewport width.

//    HTML

{/* <img src="small.jpg"
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
    alt="Landscape preview" /> */}

// Use < picture > for Art Direction & Format Fallbacks: When you need to crop / alter
//  the composition for different screen ratios, or serve next - gen formats(AVIF, WebP) with fallbacks.

{/* <div>
<picture>
  <source srcset="banner.avif" type="image/avif">
  <source srcset="banner.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="banner-desktop.jpg">
  <img src="banner-mobile.jpg" alt="Company Announcement">
</picture>
</div> */}



// 10. Form Handling: GET vs.POST and Encoding Types
// GET: Appends form data directly into the URL query string(?field = value).Used for non - destructive, idempotent requests(search queries, filters).Data is visible in history, bookmarked, and subject to URL length limits(approx. 2048 characters).

//     POST: Transmits form data in the HTTP request body.Used for state modifications, sensitive data, and file uploads.Not bookmarked or cached by default.

// Key enctype values on < form >:

// application / x - www - form - urlencoded(Default): Encodes values into key - value pairs
//  separated by &, with special characters URL - encoded.

//   multipart / form - data: Required when uploading files using
// < input type = "file" >.Sends data in distinct boundary - separated blocks.

//   text / plain: Sends data without character encoding(primarily for debugging).

// 11. HTML5 Native Form Validation Attributes
// HTML5 includes client - side validation without custom JavaScript:

// required: Prevents submission if the control is empty.

//  pattern: Validates input value against a regular expression(e.g., pattern = "[0-9]{5}").

//  min / max: Sets boundaries for numeric and date inputs.

//  minlength / maxlength: Defines character length constraints.

//   type: Built -in validation for email, url, number, tel.

//  Accessibility(a11y) & SEO


// 12. What are ARIA attributes, and what is the "First Rule of ARIA" ?
//  ARIA(Accessible Rich Internet Applications) attributes complement HTML by exposing state,
// role, and property information to accessibility APIs when native HTML is insufficient.

// The First Rule of ARIA(W3C):

// If you can use a native HTML element or attribute with the semantics and behavior you
//  require already built -in, do so instead of re - purposing an element and adding an ARIA role, state, or property.

//  Bad: <div role="button" tabindex="0" onclick="...">Click Me</div>
// (requires manual keyboard event bindings for Enter and Space).

//  Good: <button onclick="...">Click Me</button> (natively accessible, focusable,
//  handles keyboard navigation out of the box).

// 13. What is the difference between aria - hidden="true", hidden, and display: none ?
//   hidden attribute: A native HTML attribute.Browsers apply user - agent
//   style display: none.Element is hidden from both visual rendering and assistive technologies.

//   display: none(CSS): Removes the element completely from the render tree.
//   Hidden visually and from screen readers.

//   aria - hidden="true": Hides the element from the accessibility tree / screen readers,
//   but leaves it visible on screen.Useful for purely decorative icons or duplicate
//   content meant only for visual presentation.

// 14. Explain the key < meta > tags required for modern SEO and mobile rendering.

// < !--Character encoding-- >
//     <meta charset="UTF-8">

//         <!-- Mobile responsive scaling -->
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">

//             <!-- Search engine crawling directives -->
//    <meta name="robots" content="index, follow">

//                 <!-- Search engine SERP snippet -->
//     <meta name="description" content="Concise summary under 160 characters.">

//                     <!-- Open Graph / Social Sharing Protocol -->
//     <meta property="og:title" content="Page Title">
//     <meta property="og:description" content="Description">
//     <meta property="og:image" content="https://example.com/share.jpg">



// Advanced Web APIs & HTML5 Storage
// 15. Compare localStorage, sessionStorage, and Cookies.
//      Feature                  localStorage                         sessionStorage                               Cookies(document.cookie)
//=================================================================================================================================================================
//      Capacity                 ~5MB - 10MB per origin               ~5MB per origin                               ~4KB per cookie
//      Lifetime                 Persists until explicitly deleted    Cleared when browser tab / session closes     Determined by Expires or Max - Age header
//      Server Transfer          Never sent to server automatically    Never sent to server automatically           Sent automatically in every HTTP request header
//      Security Flags           None(vulnerable to XSS)               None(vulnerable to XSS)                      Supports HttpOnly, Secure, SameSite
//      Scope                    Same origin(protocol, domain, port)   Same origin + specific tab instance          Same domain and specified path

// 16. What is the Shadow DOM and how does it relate to Web Components ?
//     The Shadow DOM provides encapsulation for CSS styles and DOM subtrees,
// ensuring internal elements do not leak into the main document and parent styles do not
//  unintentionally override child styles.

// It is one of the four key Web Component specifications:

// Custom Elements: APIs to define new HTML tags(customElements.define('my-card', MyCard)).

// Shadow DOM: Scoped subtree attached via element.attachShadow({ mode: 'open' | 'closed' }).

// HTML Templates(<template> and <slot>): Markup templates that are not rendered until instantiated via JavaScript.


// 17. How does the < canvas > element differ from SVG ?
//  Feature                  HTML5 < canvas >                                                            SVG(Scalable Vector Graphics)
// Technology                Raster - based(Pixel array manipulated via JS).                             Vector - based(XML document nodes).
// DOM Integration           Single DOM node(<canvas>). Shapes are not individual DOM elements.          Every shape (<rect>, <circle>, <path>) is a distinct DOM node.
// Scalability               Loss of fidelity when scaled; requires manual redrawing on resize.          Scalable to any resolution without pixelation.
// Event Handling            Custom math required to detect clicks on drawn objects.                     Supports standard DOM event listeners directly on shapes (circle.addEventListener).
// Best For                  High-performance dynamic rendering: games, ray-tracers, video filters.      Resolution-independent UI icons, infographics, interactive maps.

// 18. What is the difference between preload, prefetch, and preconnect ?
//     Resource hints tell the browser how to optimize asset loading:

// rel = "preload": Mandatory instruction to fetch a resource critical for the current page rendering
// immediately(e.g., above - the - fold hero image, primary web font).

//     HTML

//   < link rel = "preload" href = "/fonts/inter.woff2" as="font" type = "font/woff2" crossorigin >
//   rel="prefetch": Low - priority hint suggesting the browser download resources that might be needed for future navigations during idle time.

//HTML

//   < link rel = "prefetch" href = "/next-page-bundle.js" >
//    rel="preconnect": Informs the browser to establish early network handshakes(DNS lookup, TCP handshake, TLS negotiation) to a third - party origin before the actual resource is requested.

// HTML

//  < link rel = "preconnect" href = "https://cdn.example.com" >

// 19. What are Web Workers and what can they access ?
// Web Workers allow executing JavaScript in background threads separated from the main
// execution thread, preventing long - running tasks from freezing the user interface(UI thread).

// Can access: navigator, location, XMLHttpRequest, fetch, setTimeout, IndexedDB.

// Cannot access: The DOM, document, window, and UI elements directly.
// Communication between the main thread and workers occurs exclusively
//  via message passing(postMessage and onmessage).


// 20. What is the < dialog > element and how is it controlled ?
//     The < dialog > element represents a native modal or non - modal dialog box.

//   HTML

//  < dialog id = "favDialog" >
//             <form method="dialog">
//                 <p>Are you sure you want to proceed?</p>
//                 <button value="cancel">Cancel</button>
//                 <button value="confirm">Confirm</button>
//   </form>
// </dialog> >
//     dialog.show() opens a non - modal dialog(allows interacting with the rest of the page).

// dialog.showModal() opens a modal dialog(disables interaction with page content, places the element
//  in the top layer, and renders a native::backdrop pseudo - element).

// Forms inside < dialog > with method = "dialog" automatically close the dialog upon submission and
// return the clicked button's value to dialog.returnValue.








































