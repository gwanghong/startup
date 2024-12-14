
[to Readme File](README.md)

# Service design
### Leveraging HTTP
The HTTP verbs such as GET, POST, PUT, and DELETE 
For example, a web service for managing comments might list the comments (GET), create a comment (POST), update a comment (PUT), and delete a comment (DELETE). 

### Endpoints
Grammatical - With HTTP everything is a resource (think noun or object). You act on the resource with an HTTP verb. For example, you might have an order resource that is contained in a store resource. You then create, get, update, and delete order resources on the store resource.

Readable - The resource you are referencing with an HTTP request should be clearly readable in the URL path. For example, an order resource might contain the path to both the order and store where the order resource resides: /store/provo/order/28502. This makes it easier to remember how to use the endpoint because it is human readable.

Discoverable - As you expose resources that contain other resources you can provide the endpoints for the aggregated resources. This makes it so someone using your endpoints only needs to remember the top level endpoint and then they can discover everything else. For example, if you have a store endpoint that returns information about a store you can include an endpoint for working with a store in the response.

Compatible - When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand. Consider the two following JSON response versions.

Simple - Keeping your endpoints focused on the primary resources of your application helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources. It is very helpful to write some simple class and sequence diagrams that outline your primary resources before you begin coding. These resources should focus on the actual resources of the system you are modeling. They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.

Documented - The Open API Specification is a good example of tooling that helps create, use, and maintain documentation of your service endpoints. It is highly suggested that you make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation. Creating an initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design and produce a better final result. Providing access to your endpoint documentation along with your production system helps with client implementations and facilitates easier maintenance of the service. The Swagger Petstore example documentation is a reasonable example to follow.


There are many models for exposing endpoints. We will consider three common ones, RPC, REST, and GraphQL.

#### RPC
Remote Procedure Calls (RPC) expose service endpoints as simple function calls.
One advantage of RPC is that it maps directly to function calls that might exist within the server. This could also be considered a disadvantage as it directly exposes the inner workings of the service, and thus creates a coupling between the endpoints and the implementation.

#### REST
Representational State Transfer (REST)

### GraphQL
GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST). 

# SOP and CORS
Same Origin Policy (SOP)
Cross Origin Resource Sharing (CORS)

# Port
Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device

# URL
| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |


# Domain names
Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. So a root domain would look something like byu.edu, google.com, or cs260.click.<br>
You can get information about a domain name from the domain name registry using the whois console utility.

# The internet
Dig: You can look up the IP address for any domain name using the dig console utility.
<pre>Network internals<br>
Layer	      | Example         |	Purpose<br>
Application	  HTTPS	            Functionality like web browsing<br>
Transport	    TCP	              Moving connection information packets<br>
Internet	     IP	               Establishing connections<br>
Link	         Fiber, hardware	  Physical connections<br></pre>

# Document Object Model
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display


# JSON
JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types.
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

# JavaScript
console.time();
console.timeEnd();
OUTPUT the duration time between time() and timeEnd()
 === (equality)

console.count();

# CSS Selectors
<Combinators>
Descendant: body section
Child: section > p
General sibling: p ~ div
Adjacent sibling: p + div

<Class_selector>
.summary or p.summary

<ID_selector>
#physics


# HTTPS
secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS)
Having a secure connection means that all the data is encrypted using the TLS protocol. TLS is sometimes referred to by a now unsecure predecessor protocol named SSL. TLS works by negotiating a shared secret that is then used to encrypt data.

# My allocated ip address: 34.231.37.173

# GITHUB

PUSH:   (git add) -> git commit -am "" -> git push

PULL:   git fetch -> git status -> git pull

Heading for markdown files
#: first level heading
##: second level
###: third level

# JavaScript
push:	Add an item to the end of the array	a.push(4)

pop:	Remove an item from the end of the array	x = a.pop

slice:	Return a sub-array	a.slice(1,-1)

sort:	Run a function sort an array in place	a.sort((a,b) => b-a)

values:	Creates an iterator for use with a for of loop	for (i of a.values()) {...}

find:	Find the first item satisfied by a test function	a.find(i => i < 2)

forEach:	Run a function on each array item	a.forEach(console.log)

reduce:	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)

map:	Run a function to map an array to a new array	a.map(i => i+i)

filter:	Run a function to remove items	a.filter(i => i%2)

every:	Run a function to test if all items match	a.every(i => i < 3)

some:	Run a function to test if any items match	a.some(i => 1 < 1)

# React

React: React combines JavaScript and HTML into its component format. CSS must be declared outside of the JSX file. The component itself leverages the functionality of JavaScript and can be represented as a function or class.

The render function: Whatever is returned from the render function is inserted into the component HTML element.

State: Component state is created by calling the React.useState hook function. The useState function returns a variable that contains the current state and a function to update the state.

Router: A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. React does not have a standard router package, and there are many that you can choose from. 

Angular component: An Angular component defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files that are usually grouped together in a directory rather than using the single file representation.

Reactivity: Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.

Hooks: React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React.

# Web Services

<pre>TCP/IP layers
Layer |	Example |	Purpose<br>
Application 	HTTPS 	Functionality like web browsing<br>
Transport 	TCP 	Moving connection information packets<br>
Internet 	IP 	Establishing connections<br>
Link 	Fiber, hardware 	Physical connections<br></pre>

domain name system (DNS): The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name.

Uniform Resource Locator (URL): represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. 

Ports: 
20 	File Transfer Protocol (FTP) for data transfer
22 	Secure Shell (SSH) for connecting to remote devices
25 	Simple Mail Transfer Protocol (SMTP) for sending email
53 	Domain Name System (DNS) for looking up IP addresses
80 	Hypertext Transfer Protocol (HTTP) for web requests
110 	Post Office Protocol (POP3) for retrieving email
123 	Network Time Protocol (NTP) for managing time
161 	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194 	Internet Relay Chat (IRC) for chatting
443 	HTTP Secure (HTTPS) for secure web requests

SOP and CORS:
 SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. CORS allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed.

 RPC: Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb.

 REST: Representational State Transfer (REST) attempts to take advantage of the foundational principles of HTTP. 

 GraphQL: The heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered. 

 Authorization services: Authorization services often use standard protocols for authenticating and authorizing. These include standards such as OAuth, SAML, and OIDC.

 WebSocket:
 The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

 UI testing:
 Test driven development (TDD) is a proven methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness.

 OWASP:
 A01 Broken Access Control
 A02 Cryptographic Failures
 A03 Injection
 A04 Insecure Design
 A05 Security Misconfiguration
 A06 Vulnerable and Outdated Components
 A07 Identification and Authentication Failures
 A08 Software and Data Integrity Failure
 A09 Security Logging and Monitoring Failures
 A10 Server Side Request Forgery (SSRF)

Performance monitoring:
 
1. Browser application latency
2. Network latency
3. Service endpoint latency

Browser application latency:
Reduces the impact of file size, and HTTP requests in general

1. Use compression when transferring files over HTTP.
2. Reduce the quality of images and video to the lowest acceptable level.
3. Minify JavaScript and CSS. This removes all whitespace and creates smaller variable names.
4. Use HTTP/2 or HTTP/3 so that your HTTP headers are compressed and the communication protocol is more efficient.
