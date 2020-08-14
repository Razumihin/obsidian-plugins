class FullScreenModePlugin {
  constructor() {
    this.id = "fullscreenmode";
    this.name = "Fullscreen mode";
    this.description =
      "Adds a command to open Fullscreen focus mode"
    this.defaultOn = false;

    this.app = null;
    this.instance = null;
  }

  init(app, instance) {
    this.app = app;
    this.instance = instance;

    this.instance.registerGlobalCommand({
      id: "fullscreen-focus",
      name: "Fullscreen focus mode",
      callback: this.fullscreenMode.bind(this),
    });
  }

  async onEnable() {}

  fullscreenMode() {
    const leaf = this.app.workspace.activeLeaf;
    if (!leaf) return;

    leaf.containerEl.requestFullscreen()
  }
}

module.exports = () => new FullScreenModePlugin();
