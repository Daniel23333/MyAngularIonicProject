# MyAngularIonicProject
<h2>Guidance</h2>
<h4>Installation</h4>
<pre>
  $npm install –g cordova
  $npm install –g ionic
  $npm install
</pre>
<h4>Start</h4>
<pre>
  $ionic serve -l
</pre>
<p>I have consumed different APIs from USDA database.</p> 
<p>For "Food Report by Name", I have used <strong>Dynamic url</u></strong> to call <a href="https://ndb.nal.usda.gov/ndb/doc/apilist/API-SEARCH.md">Search API</a>. User can type the name of the foods, e.g. "cheese" or "butter", then hit search button. It will show the JSON fetched from API below. If user entered non-food-name, like "aaa", then it triggered alarm below.</p>
<p>For "Food Report by Number" and "Lists", I have used <strong>Static url</strong> to call <a href="https://ndb.nal.usda.gov/ndb/doc/apilist/API-FOOD-REPORT.md">Report V1 API</a> and <a href="https://ndb.nal.usda.gov/ndb/doc/apilist/API-LIST.md">Lists API</a>.</p>
<p>All of 3 features are filter enabled, we can filter the result by typing in input text box.</p>

<h2>Project Requirement</h2>
<h3>AngularJS Coding Challenge</h3>
<p>You will create an Ionic and Angular web application to showcase your Angular and
JavaScript skills. The application will consume a web service and display the results for
  browsing. You’ll use <i>services</i>, <i>routing</i>, and <i>local storage</i>. Everything from the user
interface to the tooling will be evaluated. </p>
<h3>Objective</h3>
<p>Using the latest version of the Ionic CLI (3.5.0+), generate a new project that uses
the split pane component. Using this new project, develop an Ionic 3 and Angular 4+ web
application to display Food Reports from the USDA National Nutrient Database. </p>

<h4>Scope</h4>
<ol>
  <li>As a user, I want to search for a specific food and view the results.</li>
  <li>As a user, I want to select a food to view a &quot;Basic Report&quot; on a new page. </li>
  <li>As a user, I want the food report (Basic Report) to display all nutrients and their
values in grams. </li>
  <li>As a user, I want the web application to be responsive in nature for mobile
devices. </li>
  <li>As a developer, I want an API key so I can call the NDB REST API. </li>
  <li>As a developer, I want an Angular service to consume the NDB REST API.</li>
  <li>As a developer, I want the data to be saved to and retrieved from the browser&#39;s local storage. </li>
</ol>
 
 <h4>BONUS: </h4>
 <ol>
  <li>As a user, I want to favorite a food and report for later viewing.  </li>
  <li>As a user, I want to view a list of favorite foods with reports. </li>
  <li>As a user, I want to select a favorite food to view the “Basic Report”. </li>
  <li>As a user, I want to remove a favorite food. </li>
 </ol>

<p>API Information NDB API Website: http://ndb.nal.usda.gov/ndb/doc/index </p>
<p>Food Report Docs: http://ndb.nal.usda.gov/ndb/doc/apilist/API-FOOD-REPORT.md </p>
<p>Sample JSON: http://api.nal.usda.gov/ndb/reports/?ndbno=01009&amp;type=f&amp;format=json&amp;api_key=DEMO_KEY</p>
 

 
  






 

