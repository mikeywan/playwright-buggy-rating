import ENV from "./env";

// add timestamp to comment
function getComment(): string {
    return ENV.COMMENT + '_' + new Date().getTime().toString();
}

export default getComment;