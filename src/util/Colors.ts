export default class Colors {
  static reset = "\x1b[0m";
  static yellow = "\x1b[33m";

  static yellowText(text: string): string {
    return this.yellow + text + this.reset;
  }
}
