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