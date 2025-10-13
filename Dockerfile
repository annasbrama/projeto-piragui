FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN printf "n\n" | npx ng analytics off 2>/dev/null || true
EXPOSE 4200
CMD ["sh", "-c", "echo 'n' | npm start"]