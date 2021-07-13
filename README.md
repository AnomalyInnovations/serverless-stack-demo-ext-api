# Serverless Stack Extended Backend API [![Seed Status](https://api.seed.run/serverless-stack/serverless-stack-demo-ext-api/stages/prod/build_badge)](https://console.seed.run/serverless-stack/serverless-stack-demo-ext-api)

[Serverless Stack](https://serverless-stack.com) is a free comprehensive guide to creating full-stack serverless applications. We create a [note taking app](https://demo2.serverless-stack.com) from scratch.

This repo is used in the [Best Practices section](https://serverless-stack.com/chapters/best-practices-for-building-serverless-apps.html) of the guide.

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

The services are dependent on the resources that are created [in this accompanying repo](https://github.com/AnomalyInnovations/serverless-stack-demo-ext-resources).

#### Maintainers

This repo is maintained by [Serverless Stack](https://serverless-stack.com).

[Email]: mailto:hello@serverless-stack.com


