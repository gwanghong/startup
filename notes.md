
[to Readme File](README.md)

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
