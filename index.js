#!/usr/bin/env node
const program = require('commander');
const upimg = require('upimg')
const servers = ['alibaba', 'jd', 'netease', 'qihoo', 'smms', 'sogou', 'xitu'];

program
  .version('1.1.0')
  .usage('[-s server] -f <file>')
  .option('-s, --server [server]', "one of ['alibaba', 'jd', 'netease', 'qihoo', 'smms', 'sogou', 'xitu'], default jd")
  .option('-f, --file [file]', "the image you want to upload")
  .version('1.1.0', '-v, --version')
  .parse(process.argv);

const server = program.server ? program.server : 'jd';

if (!program.file) {
  program.outputHelp();
}

upimg[server]
    .upload(program.file)
    .then(json => console.log(json.url))
    .catch(err => console.error(err.message))

