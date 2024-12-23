import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('auto-close-sidebar.closeSidebar', () => {
        closeSidebar();
    });

    context.subscriptions.push(disposable);

    // - selection changes in the active text editor
    vscode.window.onDidChangeTextEditorSelection((event) => {
        if (event.textEditor === vscode.window.activeTextEditor) {
            closeSidebar();
        }
    });
}

export function deactivate() {}

function closeSidebar() {
    vscode.commands.executeCommand('workbench.action.closeSidebar')
        .then(() => {
            console.log('Sidebar closed successfully');
        }, (err) => {
            console.error('Failed to close the sidebar:', err);
        });
}
