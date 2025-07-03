# 1단계: 빌드 단계 (Node.js 이미지 사용)
FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# 2단계: 실행 단계 (Nginx 사용, 설정은 기본값)
FROM nginx:alpine

# Vite의 빌드 결과물(`dist`)을 Nginx 기본 루트로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# 80 포트 오픈
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]