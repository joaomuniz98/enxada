FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install
RUN npx prisma generate

COPY . .

ENV ADDRESS=0.0.0.0 PORT=3000

CMD ["node", "src/index.js"]