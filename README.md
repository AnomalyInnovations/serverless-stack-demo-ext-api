# Serverless Stack Mono-Repo Backend API

[Serverless Stack](https://serverless-stack.com) is a free comprehensive guide to creating full-stack serverless applications. We create a [note taking app](https://demo2.serverless-stack.com) from scratch.

This repo is a sample mono-repo multi-service Serverless application with AWS CloudFormation cross-stack references. The steps to creating this are outlined in the [Serverless architecture section](http://serverless-stack.com/#extra-sls-architecture) of the Serverless Stack guide.

### Steps

In this section of the guide we look at how to:

- [Link multiple Serverless services using CloudFormation cross-stack references](https://serverless-stack.com/chapters/cross-stack-references-in-serverless.html)
- [Create our DynamoDB table as a Serverless service](https://serverless-stack.com/chapters/dynamodb-as-a-serverless-service.html)
- [Create an S3 bucket as a Serverless service](https://serverless-stack.com/chapters/s3-as-a-serverless-service.html)
- [Use the same API Gateway domain and resources across multiple Serverless services](https://serverless-stack.com/chapters/api-gateway-domains-across-services.html)
- [Create a Serverless service for Cognito to authenticate and authorize our users](https://serverless-stack.com/chapters/cognito-as-a-serverless-service.html)

#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo.

``` bash
$ git clone https://github.com/AnomalyInnovations/serverless-stack-demo-ext-api
```

Go to one of the services in the `services/` dir.

And run this to deploy to your AWS account.

``` bash
$ serverless deploy
```

The services have some dependencies and need to be deployed in the following order:

1. `database`
2. `uploads`
3. `notes`
4. `users`
5. `auth`

#### Maintainers

Serverless Stack is authored and maintained by Frank Wang ([@fanjiewang](https://twitter.com/fanjiewang)) & Jay V ([@jayair](https://twitter.com/jayair)). [**Subscribe to our newsletter**](https://emailoctopus.com/lists/1c11b9a8-1500-11e8-a3c9-06b79b628af2/forms/subscribe) for updates on Serverless Stack. Send us an [email][Email] if you have any questions.

[Email]: mailto:contact@anoma.ly


