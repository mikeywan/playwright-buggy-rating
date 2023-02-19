import ENV from "./env";

// add timestamp to username
function getUsername(): string {
    return ENV.USERNAME + '_' + new Date().getTime().toString();
}

export default getUsername;