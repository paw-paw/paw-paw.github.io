export const name = "Portfolio Owner";
export const homepage_url = "https://paw-paw.github.io/";
export const linkedin_username = "pawpawesports";
export const github_username = "paw-paw";
export const instagram_username = "pawpawesports";

/*=============================================================================\
 | The email, phone number, and address fields below are Base64 encoded to     |
 | obfuscate them in the source code.  To update them, encode the data in      |
 | Base64 and paste the output as a string argument to the corresponding       |
 | `atob()` function below.                                                    |
 |                                                                             |
 | Mac command to Base64 encode (and copy the encoded data to the clipboard):  |
 |                                                                             |
 |     echo -n 'hello@example.com' | base64 | pbcopy                           |
 |                                                                             |
 | Linux command to Base64 encode:                                             |
 |                                                                             |
 |     echo -n 'hello@example.com' | base64                                    |
 |                                                                             |
 | JavaScript command to Base64 encode:                                        |
 |                                                                             |
 |     btoa('hello@example.com')                                               |
 |                                                                             |
 \============================================================================*/
const email_base64_encoded = "aGVsbG9AZXhhbXBsZS5jb20=";
const phone_base64_encoded = "KzAwIDAwMCAwMDAgMDAwMA==";

// The address fields below are for the privacy policy. They are also Base64 encoded.
const address_line_1_base64_encoded = "QWRkcmVzcyBwZW5kaW5n";
const address_line_2_base64_encoded = "TG9jYXRpb24gcGVuZGluZw==";

// The data is decoded and exported below. Do not edit below this line.
export const email = atob(email_base64_encoded);
export const phone = atob(phone_base64_encoded);
export const address_line_1 = atob(address_line_1_base64_encoded);
export const address_line_2 = atob(address_line_2_base64_encoded);

// Helper code for creating URLs from the above data.
export const linkedin_short = linkedin_username ? `linkedin.com/in/${linkedin_username}` : "Profile pending";
export const linkedin_url   = linkedin_username ? `https://www.linkedin.com/in/${linkedin_username}` : "";
export const github_url = `https://github.com/${github_username}`;
export const instagram_short = instagram_username ? `instagram.com/${instagram_username}` : "";
export const instagram_url = instagram_username ? `https://www.instagram.com/${instagram_username}/` : "";
