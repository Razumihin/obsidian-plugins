const filePathToURI = (path) => {
  console.log(path);
  return path
    .replace(/\"/g, "")
    .replace(/\\/g, "/")
    .replace(/ /g, "%20")
    .replace(/(.)\:\//, "file:///$1:/");
};

const fixLine = (line) => {
  const regexp = /\[([^\[]+)\]\(\windir\((.*)\)\)/g;
  const matches = [...line.matchAll(regexp)];
  const match = matches[0];

  if (matches.length === 0) return line;
  else {
    let str = `[${match[1]}](${filePathToURI(match[2])})`;
    return str;
  }
};

const fixWinPaths = (content) =>
  content
    .split("\n")
    .map((line) => fixLine(line))
    .join("\n");

class WindowsPathsToLinks {
  constructor() {
    this.id = "windowspathstolinks";
    this.name = "Windows paths to links";
    this.description = "Adds a command to reformat standard windows paths to file:/// links when enclosed to windir() closures in a markdown link"
    this.defaultOn = false;

    this.app = null;
    this.instance = null;
  }

  init(app, instance) {
    this.app = app;
    this.instance = instance;
    this.instance.registerGlobalCommand({
      id: "format-windows-links",
      name: "Format Windows Links",
      callback: this.formatLinks.bind(this),
    });
  }

  formatLinks() {
    const leaf = this.app.workspace.activeLeaf;

    if (!leaf) return;

    const contents = leaf.view.data;

    const cleanedContents = fixWinPaths(contents);
    if (cleanedContents !== contents) {
      this.app.nextFrame(() => leaf.view.setData(cleanedContents));
    }
  }
}

module.exports = () => new WindowsPathsToLinks();
