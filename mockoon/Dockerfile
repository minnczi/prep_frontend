FROM node:18-alpine

RUN npm install -g @mockoon/cli@3.1.0
COPY mockoon-tct-frontend.json ./mockoon-tct-frontend.json

# Install curl for healthcheck and tzdata for timezone support.
RUN apk --no-cache add curl tzdata

# Do not run as root.
RUN adduser --shell /bin/sh --disabled-password --gecos "" mockoon
RUN chown -R mockoon ./mockoon-tct-frontend.json
USER mockoon

EXPOSE 3001

ENTRYPOINT ["mockoon-cli", "start", "--daemon-off", "--disable-log-to-file", "--data", "mockoon-tct-frontend.json", "--container"]

# Usage: docker run -p <host_port>:<container_port> mockoon-test