import * as argon2 from "argon2";

let hash1 = await argon2.hash(
    "hiiiiiiiiiiiiiiiiii378547!***$&&8jdhf???#>iiiiiiiiii"
);

let hash2 = await argon2.hash("hi");

console.log(hash1);
console.log(hash2);
