// data enum of environment
export default class ENV{
    public static BASE_URL = process.env.BASE_URL !== undefined ? process.env.BASE_URL : 'https://buggy.justtestit.org/';
    public static USERNAME = process.env.USERNAME !== undefined ? process.env.USERNAME : '_MW';
    public static FIRSTNAME = process.env.FIRSTNAME !== undefined ? process.env.FIRSTNAME : '_M';
    public static LASTNAME = process.env.LASTNAME !== undefined ? process.env.LASTNAME : '_W';
    public static PASSWORD = process.env.PASSWORD !== undefined ? process.env.PASSWORD : 'Aa12345!';
    public static NEW_PASSWORD = process.env.NEW_PASSWORD !== undefined ? process.env.NEW_PASSWORD : 'aA12345!';
    public static COMMENT = process.env.COMMENT !== undefined ? process.env.COMMENT : 'Awesome';
}