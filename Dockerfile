# Use Node.js slim image as base
FROM node:21-slim AS base

# Set pnpm enviroment variables
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to use pnpm
RUN corepack enable

# Copy the source code
COPY . /app

# Set the working directory
WORKDIR /app

# Install dependencies and build the app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build
