# ubuntu
apt-get update
apt-get install -y \
  curl \
  git \
  gnupg2 \
  jq \
  sudo \
  zsh \
  vim \
  build-essential \
  openssl \
  libssl-dev \
  pkg-config \
  libudev-dev \
  wget \
  cmake

# rust
curl https://sh.rustup.rs -sSf | sh -s -- -y 

source $HOME/.cargo/env

rustup install nightly
rustup component add rustfmt
rustup component add rustfmt --toolchain nightly
rustup component add clippy 
rustup component add clippy --toolchain nightly

cargo install cargo-expand
cargo install cargo-edit

# anchor
cargo install --git https://github.com/project-serum/anchor --tag v0.24.2 anchor-cli --locked
