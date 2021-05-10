# Code 401: Advanced Software Development in Full-Stack Javascript

## Reading 13: Message Queues

1. What does it mean that web sockets are bidirectional? Why is this useful?

    - They can communicate between each other, thus faster and more efficient.

1. Does socket.io use HTTP? Why?

    - It attaches to an HTTP server

1. What happens when a client emits an event?

    - The event is fired to the subscribers

1. What happens when a server emits an event?

    - The response is sent to the subscribers listening for the event.

1. What happens if a client “misses” an event?

    - 

1. How can we mitigate this?

    - 

## Vocabulary Terms

- Socket:

    - Individual ID with ID #

- Web Socket

    - Allows communication channels over TCP connection

- Socket.io

    - "Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API." [Wikipedia](https://en.wikipedia.org/wiki/Socket.IO)

- Client

    - Vendors, drivers, etc.

- Server

    - Central Hub, the brain of the app

- OSI Model

    - The OSI model characterizes computing functions into a universal set of rules and requirements in order to support interoperability between different products and software.

- TCP Model

    - TCP/IP "The Internet protocol suite provides end-to-end data communication specifying how data should be packetized, addressed, transmitted, routed, and received. " [Wikipedia](https://en.wikipedia.org/wiki/Internet_protocol_suite)

- TCP

    - Transmission Control Protocol

- UDP

    - User Diagram Protocol

- Packets

    - Payload, data transmitted