import tkinter as tk
from tkinter import messagebox

# Create the main window (it won't be shown)
root = tk.Tk()
root.withdraw()  # Hide the root window

# Show the message box
messagebox.showinfo("Greeting", "Hello From Test 3")
