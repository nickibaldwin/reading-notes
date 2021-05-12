# Code 401: Advanced Software Development in Full-Stack Javascript

## Reading 17 + 18: AWS - S3, Dynamo and Lambda

1. Describe “The Cloud”

- "The cloud" refers to servers that are accessed over the Internet, and the software and databases that run on those servers." [Cloudflare](https://www.cloudflare.com/learning/cloud/what-is-the-cloud/#:~:text=%22The%20cloud%22%20refers%20to%20servers,that%20run%20on%20those%20servers.&text=By%20using%20cloud%20computing%2C%20users,applications%20on%20their%20own%20machines)

1. What is a container (as it relates to computers and servers)?

- "Put simply, a container consists of an entire runtime environment: an application, plus all its dependencies, libraries and other binaries, and configuration files needed to run it, bundled into one package." [CIO](https://www.cio.com/article/2924995/what-are-containers-and-why-do-you-need-them.html#:~:text=Put%20simply%2C%20a%20container%20consists,it%2C%20bundled%20into%20one%20package)

1. What is auto-scaling?

- "AWS Auto Scaling lets you build scaling plans that automate how groups of different resources respond to changes in demand. You can optimize availability, costs, or a balance of both. AWS Auto Scaling automatically creates all of the scaling policies and sets targets for you based on your preference." [Amazon](https://aws.amazon.com/autoscaling/#:~:text=AWS%20Auto%20Scaling%20lets%20you%20build%20scaling%20plans%20that%20automate,you%20based%20on%20your%20preference)

1. What is bandwidth?

- Maximum amount of data that can be transfered.

1. How do cloud providers compute service costs?

- "When setting price, cloud providers determine the expense to maintaining the network. They start by calculating costs for network hardware, network infrastructure maintenance, and labor. These expenses are added together and then divided by the number of rack units a business will need for its IaaS cloud." [Expedient](https://expedient.com/knowledgebase/blog/2015-05-01-how-the-cost-of-cloud-computing-is-calculated/#:~:text=When%20setting%20price%2C%20cloud%20providers,need%20for%20its%20IaaS%20cloud)

## Vocab

- Server Instances:

  - "An instance is a single copy of the software running on a single physical or virtual server." [nginx](https://www.nginx.com/faq/what-is-an-instance/)

- Containers

  - "Put simply, a container consists of an entire runtime environment: an application, plus all its dependencies, libraries and other binaries, and configuration files needed to run it, bundled into one package." [CIO](https://www.cio.com/article/2924995/what-are-containers-and-why-do-you-need-them.html#:~:text=Put%20simply%2C%20a%20container%20consists,it%2C%20bundled%20into%20one%20package)

- Cloud Services

  - Online server providers

- Cloud Architecture

  - "Cloud Architecture refers to the various components in terms of databases, software capabilities, applications, etc. engineered to leverage the power of cloud resources to solve business problems." [HCL Tech](https://www.hcltech.com/technology-qa/what-is-cloud-architecture#:~:text=Cloud%20Architecture%20refers%20to%20the,as%20the%20relationships%20between%20them.&text=Cloud%20resources,-Software%20components%20and)

- AWS

  - Amazon Web Services

- EC2/Beanstalk vs Heroku

  - Both deploy apps, EC2 is through AWS.

# Reading 18: AWS: API, Dynamo and Lambda

1. What are serverless functions?

  > "single-purpose, programmatic functions that are hosted on managed infrastructure. These functions, which are invoked through the Internet, are hosted and maintained by cloud computing companies." [Pubnub](https://www.pubnub.com/blog/what-is-a-serverless-function/)

1. If you were to create a system that emulated Lambda functions, how would you do it?

> Event handlers? 

1. Describe how a CDN works

> "highly-distributed platform of servers that helps minimize delays in loading web page content by reducing the physical distance between the server and the user." [Akamai](https://www.akamai.com/us/en/cdn/what-is-a-cdn.jsp)

## Vocab

- Serverless Functions

> "single-purpose, programmatic functions that are hosted on managed infrastructure. These functions, which are invoked through the Internet, are hosted and maintained by cloud computing companies." [Pubnub](https://www.pubnub.com/blog/what-is-a-serverless-function/)

- Cloud Storage

> "Cloud storage is a model of computer data storage in which the digital data is stored in logical pools, said to be on "the cloud". The physical storage spans multiple servers, and the physical environment is typically owned and managed by a hosting company." [Wikipedia](https://en.wikipedia.org/wiki/Cloud_storage)

- CDN

> Content Delivery Network