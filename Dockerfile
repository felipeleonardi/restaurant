FROM node:18

# Set the working directory to /app inside the container
WORKDIR /usr/src/app

# Copy app files
COPY . .

ARG ID1AG
ARG ID2AG
ARG ID3AG

ENV id1=$ID1AG
ENV id2=$ID2AG
ENV id3=$ID3AG

RUN echo "teste de env id1: $id1"
RUN echo "teste de env id2: $id2"
RUN echo "teste de env id3: $id3"

RUN curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
RUN syft ./ -o cyclonedx-xml > sbom.xml
RUN ls

ENTRYPOINT ["node", "iqserver.js"]
