import ENV from "./env";

function getUsername(): string {
    return ENV.USERNAME + '_' + new Date().getTime().toString();
}

export default getUsername;