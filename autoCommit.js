const { exec } = require('child_process');
const path = require('path');
const chokidar = require('chokidar');

const repoPath = path.resolve(__dirname);
const commitMessage = 'Auto-commit';

// Inicializa o watcher
const watcher = chokidar.watch(repoPath, {
    ignored: /(^|[\/\\])\../, // ignora arquivos ocultos
    persistent: true
});

// Evento para alterações de arquivos
watcher.on('change', filePath => {
    console.log(`${filePath} has been changed`);

    exec('git add .', { cwd: repoPath }, (err, stdout, stderr) => {
        if (err) {
            console.error(`git add error: ${err}`);
            return;
        }
        exec(`git commit -m "${commitMessage}"`, { cwd: repoPath }, (err, stdout, stderr) => {
            if (err) {
                console.error(`git commit error: ${err}`);
                return;
            }
            exec('git push', { cwd: repoPath }, (err, stdout, stderr) => {
                if (err) {
                    console.error(`git push error: ${err}`);
                } else {
                    console.log('Changes pushed to GitHub');
                }
            });
        });
    });
});

console.log(`Watching for changes in ${repoPath}`);
