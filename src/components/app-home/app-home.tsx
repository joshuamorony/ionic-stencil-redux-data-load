import { Component, State, Prop } from "@stencil/core";
import { Store, Action } from "@stencil/redux";
import { loadData } from "../../actions/data";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() items: any;
  @State() loading: boolean;
  @State() error: any;

  @Prop({ context: "store" }) store: Store;
  loadData: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, state => {
      const {
        dataReducer: { items, loading, error }
      } = state;
      return {
        items,
        loading,
        error
      };
    });

    this.store.mapDispatchToProps(this, {
      loadData
    });
  }

  componentDidLoad() {
    this.loadData();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="danger">
          <ion-title>Ionic + StencilJS + Redux</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list lines="none">
          {this.items.map(item => (
            <ion-item>
              <ion-label>{item}</ion-label>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }
}
