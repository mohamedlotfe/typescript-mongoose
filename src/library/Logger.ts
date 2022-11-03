import { blue, yellow, red, blueBright, yellowBright, redBright } from 'chalk';

export class Logger {
    public static log = (args: any) => this.info(args);
    public static info = (args: any) => console.log(blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? blueBright(args) : args);
    public static warning = (args: any) => console.log(yellow(`[${new Date().toLocaleString()}] [WARN]`), typeof args === 'string' ? yellowBright(args) : args);
    public static error = (args: any) => console.log(red(`[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? redBright(args) : args);
}
