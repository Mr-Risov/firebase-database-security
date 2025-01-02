# Firebase Database Security Rules Generator

This project provides a web-based tool to generate Firebase Realtime Database security rules dynamically. Users can easily input folder names, create Firebase security rules, and ensure proper access control for their applications.

## Project Features
- **Dynamic Rule Generation**: Users can add unlimited folder names to generate Firebase security rules in JSON format.
- **Simple and Intuitive Interface**: A clean UI to manage folder names and view generated security rules.
- **Live Preview**: Instantly view and copy the generated Firebase rules for integration into your project.
- **Unrestricted Accessibility (Optional)**: Users can choose to set folder-level `.read` and `.write` permissions as `true` for unrestricted access.

## Live Demo
Visit the live demo of this project here: [Firebase Database Security Generator](https://mr-risov.github.io/firebase-database-security)

---

## How It Works
1. **Add Folder Names**:
   - Enter folder names in the input fields provided on the website.
   - Use the **`+ Add Folder`** button to dynamically add more folder inputs.

2. **Generate Rules**:
   - Click the **`Generate Rules`** button to compile all folder names into a Firebase security rules JSON object.

3. **Copy Rules**:
   - The generated rules are displayed in a `preformatted` code block. You can copy the JSON object directly and paste it into your Firebase Realtime Database rules.

---

## Firebase Rules Example
Here’s an example of generated rules:

```json
{
  "rules": {
    "smsapi": {
      ".read": "true",
      ".write": "true"
    },
    "smsapi2": {
      ".read": "true",
      ".write": "true"
    },
    "smsapi3": {
      ".read": "true",
      ".write": "true"
    }
  }
}
```

### How to Use These Rules
1. Go to your [Firebase Console](https://console.firebase.google.com/).
2. Select your project and navigate to the **Realtime Database** section.
3. Open the **Rules** tab and replace the default rules with the generated JSON rules.
4. Click **Publish** to apply the changes.

---

## How to Check Firebase Database
You can monitor and verify the Firebase database behavior as follows:
1. Navigate to the **Data** tab in your Firebase Realtime Database.
2. Add or modify data under the folder names you created (e.g., `smsapi`, `smsapi2`, etc.).
3. Test read/write access using Firebase's **Database Test Rules** feature or through your app.

---

## How This Secures Your App
- **Controlled Access**: By generating Firebase rules, you ensure only defined folders are accessible.
- **Dynamic Configuration**: Quickly update rules based on your application's evolving requirements.
- **Simplified Testing**: The generated JSON rules allow you to test access for specific folders directly in Firebase.
  
**Important**: While the current implementation sets `.read` and `.write` permissions to `true` for simplicity, it is recommended to refine these rules for production by implementing conditions like authenticated access (`auth != null`).

---

## Getting Started Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Mr-Risov/firebase-database-security.git
   ```
2. Navigate to the project folder:
   ```bash
   cd firebase-database-security
   ```
3. Open `index.html` in your browser to test the tool locally.

---

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/Mr-Risov/firebase-database-security/issues).

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author
Created and maintained by **[Mr-Risov](https://github.com/Mr-Risov)**.


