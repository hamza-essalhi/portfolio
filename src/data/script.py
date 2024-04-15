import json
import os

def update_json(title,desc, link, images):
    # Check if the JSON file exists and is not empty
    file_path = 'src/data/projects.json'
    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        with open(file_path, 'r') as file:
            data = json.load(file)
    else:
        data = []

    # Update data with new inputs
    new_project = {
        "title": title,
        "link": link,
        "images": images,
        "desc":desc
    }
    data.append(new_project)
    print(data)
    # Write updated data back to the JSON file
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

if __name__ == "__main__":
    project_name = input("Enter project name: ")
    project_github = input("Enter Link: ")
    project_desc = input("Enter desciption: ")
    # Taking cover images as a comma-separated list
    images = input("Enter cover image filenames (comma-separated): ").split(',')

    update_json(project_name, project_desc,project_github, images)
    print("JSON file updated successfully!")
