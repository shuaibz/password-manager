import os

# Get the path to the requirements.txt file in the same folder as the script
script_folder = os.path.dirname(os.path.abspath(__file__))
requirements_path = os.path.join(script_folder, 'requirements.txt')

# Check if requirements.txt exists
if not os.path.exists(requirements_path):
    print("Error: requirements.txt not found.")
else:
    # Install dependencies using pip
    os.system(f'pip install -r {requirements_path}')
