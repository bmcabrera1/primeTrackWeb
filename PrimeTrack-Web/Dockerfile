# ===== Stage 1: Build =====
FROM node:20-alpine AS builder

WORKDIR /app

# Copia solo manifiestos primero para caches
COPY package.json package-lock.json* ./
RUN npm ci

# Copia el resto del proyecto
COPY . .

# Base path para Vite (puedes sobreescribir en build con --build-arg BASE_PATH=/primeTrackWeb/)
ARG BASE_PATH=/
ENV VITE_BASE=${BASE_PATH}

# Build de producción
RUN npm run build

# ===== Stage 2: Runtime (Nginx) =====
FROM nginx:alpine

# Elimina config por defecto y añade la nuestra (SPA + caché assets)
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia el build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
