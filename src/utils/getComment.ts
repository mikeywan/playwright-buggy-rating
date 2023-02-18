import ENV from "./env";

function getComment(): string {
    return ENV.COMMENT + '_' + new Date().getTime().toString();
}

export default getComment;