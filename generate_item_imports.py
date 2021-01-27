import os
import json
import glob
import ntpath


def get_file_name(file_path: str) -> str:
    return os.path.splitext(ntpath.basename(file_path))[0]

def main():
    root_dir = os.path.dirname(os.path.realpath(__file__))
    app_dir = os.path.join(root_dir, "src/app/")
    items_dir_glob_regex = os.path.join(app_dir, "**/items/")
    items_dir = [found_dir for found_dir in glob.glob(items_dir_glob_regex, recursive=True)][0]
    item_details_dir = os.path.join(items_dir, "itemDetails")
    item_details_glob_regex = os.path.join(item_details_dir, "*")
    all_item_details = [get_file_name(item_details_file) for item_details_file in glob.glob(item_details_glob_regex)]
    item_imports = {
        "imports": all_item_details
    }
    item_import_json_path = os.path.join(items_dir, "itemImports.json")
    with open(item_import_json_path, 'w') as f:
        json.dump(item_imports, f, indent=4)
    print(f"Successfully wrote {item_import_json_path}")

if __name__ == "__main__":
    main()