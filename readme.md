# IraniCard React Client Panel

## ‌Before Build&#x20;

1.  we need a GITLAB\_TOKEN\_PUI to install from our package registery

2.  this token only need to have a `read_repository` access from [paliz UI](https://git.plzdev.ir/pfl/paliz-ui)&#x20;

## Build Setup for [Node.js Server](https://nextjs.org/docs/deployment#nodejs-server)

```bash
# cd into src
cd src

# run npm install 
npm install

# then build
npm run build

# run the server

npm run start
```

## Docker Deployment Instructionsba

```bash
# in root of project run
docker build -t nextjs-docker .

# to run the container
docker run -p 3000:3000 nextjs-docker
```

