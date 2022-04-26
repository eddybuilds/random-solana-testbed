# STAGE 0
FROM rust:slim-buster

# stop being asked for our timezone
ENV DEBIAN_FRONTEND=noninteractive

# build solana from scratch
RUN rustup toolchain install nightly && rustup default nightly && rustup component add rustfmt
RUN apt-get update && apt-get install -y git pkg-config libudev-dev make libclang-dev clang cmake
RUN git clone https://github.com/solana-labs/solana
WORKDIR /solana
RUN --mount=type=cache,target=/usr/local/cargo/registry \
    --mount=type=cache,target=/solana/target/release/build \
    --mount=type=cache,target=/solana/target/release/deps \
    --mount=type=cache,target=/solana/target/release/incremental \
    cargo build --release

# STAGE 1 
FROM ubuntu:20.04

# stop being asked for our timezone
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /home/

COPY . .

RUN bash ./setup.sh

ENV PATH="/root/.cargo/bin:$PATH"
ENV PATH="/root/.local/share/solana/install/active_release/bin:$PATH"

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# nvm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 14.18.1

RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# node, npm, yarn
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install -g yarn

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN node -v
RUN npm -v

# python
RUN apt-get update && apt-get install -y software-properties-common gcc && \
    add-apt-repository -y ppa:deadsnakes/ppa

RUN apt-get update && apt-get install -y python3.6 python3-distutils python3-pip python3-apt

RUN python3 -v

# copy solana
COPY --from=0 /solana/target/release/* /usr/local/bin
