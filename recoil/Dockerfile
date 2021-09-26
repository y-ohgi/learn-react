FROM node:16-slim

ENV HOST 0.0.0.0

WORKDIR /app/

COPY package.json package-lock.json /app/

RUN set -ex \
  && npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
