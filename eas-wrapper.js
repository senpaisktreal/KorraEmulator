const { spawn } = require('child_process');

const env = Object.assign({}, process.env);

// 1. Define absolute Windows paths
const windowsRoot = __dirname;
const nodeDir = 'C:\\Program Files\\nodejs';
const systemDir = 'C:\\Windows\\system32';

// 2. Clean and build a standard Windows PATH
env.PATH = `${systemDir};C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;${nodeDir};${env.PATH}`;

// 3. Force EAS to skip Git and use the correct Windows Home/Root
env.EAS_NO_VCS = '1';
env.HOME = 'C:\\Users\\gamer';
env.USERPROFILE = 'C:\\Users\\gamer';
env.SystemRoot = 'C:\\Windows';

// 4. Scrub MSYS2/Bash variables that cause lstat errors
delete env.PWD;
delete env.OLDPWD;
delete env.TERM;
delete env.SHELL;

console.log('--- Starting EAS Build (No-Git Mode) ---');
console.log('Project Root:', windowsRoot);

const easCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['--yes', 'eas-cli@24.8.0', 'build', '--platform', 'android', '--profile', 'development', '--non-interactive', '--no-wait'];

const child = spawn(easCommand, args, {
  stdio: 'inherit',
  env: env,
  cwd: windowsRoot, // Force Windows-style CWD
  shell: process.platform === 'win32'
});

child.on('exit', (code) => {
    if (code !== 0) console.log(`EAS Build failed with code ${code}. If you still see 'lstat' errors, try running this from a standard CMD window.`);
    process.exit(code);
});
