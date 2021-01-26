### Class 1/25/2021

### Web Development Practical Topics
- Web Site  Hosting (301 focus on this stuff)
  -Where do files go, how do we access them?
    -In order to access a website on the internet, you need to go to a URL that points to a site HOST
      - ie GoDaddy, NameCheap, SquareSpace, AWS
        - Host Site Content
          - HTML
          - CSS
          - JS
          - Images
          - Videos
          - Audio Files
        - FTP / we've been doing using git and git remotes => pushes files to remote directory
      - Think of this as a directory that lives in the cloud that can accept HTTP requests.
    - Accessing this is just a matter of buying an address.
      - Domain name registrars. 
      - CNAME - 
- SEO 
  - Search Engine Optimization 
  - Is your content listed well, for search engine indexers
    - A program that is constantly running to see what content exists for keywords and topics.
    - Data driven process, but it starts with data existing.
  - For a site developer this data is our site content:
    - What is your site about? What is your site giving to the world?
    - Have content that people care about.
      - The content already includes keywords, titles, headings. 
    - Creating good outlines and semantic HTML. 
    - meta tags that describe content well. 
      - Data about your content
    - Having content that loads well.
    - Tayloring scripts/configuration and meta data to specific 3rd parties (google, etc...).
- Analytics 
  - Data driven
  - How users are engaging with your content.
    - The data we're talking about is the collection of stats invovling user engagement.
    - How long are people looking at my home page?
    - How many times are people clicking on calls to action?
    - Logging geolocation data of your users.
      - A lot of this is calculated already by hosting services.
    - What do you want to do with this data, and what questions are you asking?
      - Do I want people to only spend 3-10 seconds on a specific piece of site?
  https://analytics.google.com/analytics/academy/ 


### User Interaction 
- HTML Video / Audio
  - Native support in HTML
  - Host video and audio content on the web (in the cloud). 
  - This content can be rendered / listened to via HTML

```html 
<video src="path/to/video.file">

<audio scr="path/to/audio.file">

<video controls volume="0.5" autoplay muted> 
  <source scr="path/to/a/video.file">
  <source scr="path/to/another/video.file">
  <!-- If one source element is unsupported, you can list another that hopefully is supported, the first supported video will be used -->
</video>

```