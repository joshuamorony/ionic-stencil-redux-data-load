import { Component, Prop } from "@stencil/core";
import { Store } from "@stencil/redux";
import { configureStore } from "../../store/index";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  @Prop({ context: "store" }) store: Store;

  componentWillLoad() {
    this.store.setStore(configureStore({}));
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
