FROM debian

RUN apt-get update
RUN apt-get install -y curl
RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource.sh
RUN bash nodesource.sh
RUN apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get install -y yarn
RUN apt-get clean

RUN mkdir /idoctor

WORKDIR /idoctor

COPY ./idoctor/package.json /idoctor

COPY ./idoctor /idoctor

VOLUME ./idoctor /idoctor

EXPOSE 3000

CMD npm install && yarn start