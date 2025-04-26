"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const child_process_1 = require("child_process");
const path = __importStar(require("path"));
const vscode = __importStar(require("vscode"));
function activate(context) {
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
function runPythonScript(scriptPath, extensionPath) {
    // Determine Python binary based on OS
    let pythonPath;
    if (process.platform === "win32") {
        // pythonPath = "C:/msys64/mingw64/bin/python.exe";
        pythonPath = path.join(extensionPath, "python", "python.exe"); // Windows
    }
    else {
        pythonPath = path.join(extensionPath, "python", "bin", "python"); // macOS/Linux
    }
    (0, child_process_1.exec)(`${pythonPath} ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Python Error: ${stderr || error.message}`);
            return;
        }
        vscode.window.showInformationMessage(stdout.trim());
    });
}
// Deactivate function
function deactivate() { }
//# sourceMappingURL=extension.js.map