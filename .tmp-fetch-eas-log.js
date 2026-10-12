const { execFileSync } = require('child_process');
const https = require('https');
const zlib = require('zlib');

const easCli = 'C:\\Users\\gamer\\AppData\\Local\\Google\\AndroidStudio2026.1.4\\acp-agents\\.runtimes\\node\\24.13.0\\npm-cache\\_npx\\cdcf29a1293ceb8d\\node_modules\\eas-cli\\bin\\run';
const raw = execFileSync('node', [easCli, 'build:view', 'ee7e693e-142e-4f10-89c9-00f476d71867', '--json'], {
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'ignore']
});
const start = raw.indexOf('{');
const end = raw.lastIndexOf('}');
const build = JSON.parse(raw.slice(start, end + 1));

https.get(build.logFiles[0], response => {
  const chunks = [];
  response.on('data', chunk => chunks.push(chunk));
  response.on('end', () => {
    let contents = Buffer.concat(chunks);
    const encoding = response.headers['content-encoding'];
    if (encoding === 'gzip') contents = zlib.gunzipSync(contents);
    else if (encoding === 'deflate') contents = zlib.inflateSync(contents);
    else if (encoding === 'br') contents = zlib.brotliDecompressSync(contents);
    process.stdout.write(`HTTP ${response.statusCode}; content-type=${response.headers['content-type']}; encoding=${encoding || 'none'}; bytes=${contents.length}\n`);
    process.stdout.write(contents.toString('utf8'));
  });
}).on('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});
