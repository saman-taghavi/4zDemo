# Install dependencies only when needed
FROM node:16-alpine AS deps
ARG GITLAB_TOKEN_PUI
RUN echo ${PALIZ_UI_TOKEN} ${GITLAB_TOKEN_PUI}
RUN echo @pfl:registry=https://git.plzdev.ir/api/v4/packages/npm/
RUN echo '//git.plzdev.ir/api/v4/packages/npm/:_authToken'="${GITLAB_TOKEN_PUI}"

ARG BASE_URL
ENV BASE_URL=$BASE_URL
RUN echo $BASE_URL
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /src

# Install dependencies based on the preferred package manager
COPY src/package.json  /src/
COPY src/.npmrc  .
COPY src/next.config.js  /src/
COPY src/next-i18next.config.js  /src/
RUN npm i

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /src
COPY --from=deps src/node_modules ./node_modules

COPY  src .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1
ARG BASE_URL
ENV BASE_URL=${BASE_URL}
RUN npm run build


# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /src

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder src/next.config.js ./
COPY --from=builder src/next-i18next.config.js ./
COPY --from=builder  src/public ./public
COPY --from=builder src/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs src/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs src/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
