import { init, exit } from "myPackage";

init({ url: "true" });

exit(2);

localStorage.clear();

init();
