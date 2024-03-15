
[to Readme File](README.md)

# Service design
Leveraging HTTP
The HTTP verbs such as GET, POST, PUT, and DELETE 
For example, a web service for managing comments might list the comments (GET), create a comment (POST), update a comment (PUT), and delete a comment (DELETE). 

#Endpoints#
Grammatical - With HTTP everything is a resource (think noun or object). You act on the resource with an HTTP verb. For example, you might have an order resource that is contained in a store resource. You then create, get, update, and delete order resources on the store resource.

Readable - The resource you are referencing with an HTTP request should be clearly readable in the URL path. For example, an order resource might contain the path to both the order and store where the order resource resides: /store/provo/order/28502. This makes it easier to remember how to use the endpoint because it is human readable.

Discoverable - As you expose resources that contain other resources you can provide the endpoints for the aggregated resources. This makes it so someone using your endpoints only needs to remember the top level endpoint and then they can discover everything else. For example, if you have a store endpoint that returns information about a store you can include an endpoint for working with a store in the response.

Compatible - When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand. Consider the two following JSON response versions.

Simple - Keeping your endpoints focused on the primary resources of your application helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources. It is very helpful to write some simple class and sequence diagrams that outline your primary resources before you begin coding. These resources should focus on the actual resources of the system you are modeling. They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.

Documented - The Open API Specification is a good example of tooling that helps create, use, and maintain documentation of your service endpoints. It is highly suggested that you make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation. Creating an initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design and produce a better final result. Providing access to your endpoint documentation along with your production system helps with client implementations and facilitates easier maintenance of the service. The Swagger Petstore example documentation is a reasonable example to follow.


There are many models for exposing endpoints. We will consider three common ones, RPC, REST, and GraphQL.


## RPC

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

# Fix
