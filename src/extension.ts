import { exec } from 'child_process';
import * as path from 'path';
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	// // Get the extension path
	const extensionPath = vscode.extensions.getExtension("rajab1.youtube-test4")?.extensionPath;
	if (!extensionPath) {
		vscode.window.showErrorMessage("Extension path not found.");
		return;
	}


	// Register commands
	let test1Ext = vscode.commands.registerCommand('extension.test1Ext', () => {
		const scriptPath = path.join(extensionPath, "python_scripts", "test1.py");
		runPythonScript(scriptPath, extensionPath);
	});

	let test2Ext = vscode.commands.registerCommand('extension.test2Ext', () => {
		const scriptPath = path.join(extensionPath, "python_scripts", "test2.py");
		runPythonScript(scriptPath, extensionPath);
	});

	let test3Ext = vscode.commands.registerCommand('extension.test3Ext', () => {
		const scriptPath = path.join(extensionPath, "python_scripts", "test3.py");
		runPythonScript(scriptPath, extensionPath);
	});

	// Add commands to subscriptions
	context.subscriptions.push(test1Ext, test2Ext, test3Ext);
}

// ✅ Function to detect Python & run script
function runPythonScript(scriptPath: string, extensionPath: string) {

	// Determine Python binary based on OS
	let pythonPath: string;
	if (process.platform === "win32") {
		pythonPath = "C:/msys64/mingw64/bin/python.exe";

		// pythonPath = path.join(extensionPath, "python", "python.exe"); // Windows
	} else {
		pythonPath = path.join(extensionPath, "python", "bin", "python"); // macOS/Linux
	}

	exec(`${pythonPath} ${scriptPath}`, (error, stdout, stderr) => {
		if (error) {
			vscode.window.showErrorMessage(`Python Error: ${stderr || error.message}`);
			return;
		}
		vscode.window.showInformationMessage(stdout.trim());
	});
}

// Deactivate function
export function deactivate() { }
