FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Backend URL injected at build time
ARG REACT_APP_FOODIE_API_URL=http://localhost:7070
ENV REACT_APP_FOODIE_API_URL=$REACT_APP_FOODIE_API_URL

# Disable ESLint during production build (jest/globals env key incompatibility)
ENV DISABLE_ESLINT_PLUGIN=true

RUN npm run build

# --- Production stage: serve with nginx ---
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

# SPA fallback: all routes serve index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
